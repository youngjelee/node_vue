const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const {isLoggedIn,  isNotLoggedIn} = require('./middlewares');


router.get('/', async(req,res) => {
    
    if(req.isAuthenticated()){
        const user = req.user;
        return res.json(user);
    } else{
        return res.json(null);
    }
});

//회원가입
router.post('/',isNotLoggedIn ,async (req,res,next)=> {
 
    try{
        const hash = await bcrypt.hash(req.body.password, 12);
        
        //////이메일로 중복가입 체크//
        const exUser = await db.User.findOne({
            where:{

                email : req.body.email,
            },
        });
        if(exUser) {
            return res.status(403).json({
                errorCode : 1,
                message : "이미 회원가입되어있습니다."
            })
        }
        ///이메일 중복가입체크 끝 ////

        const newUser = await db.User.create({
                email : req.body.email,
                nickName : req.body.nickName,
                password : hash,
        });//HTTP STATUS CODE 

        await passport.authenticate('local',(err,user,info)=>{
            //에러시나 info 에 정보 (실패사유)
            if(err){
                console.error(err);
                return next(err);
            }
            if(info){
                return res.status(401).send(info.reason);
            }

            return req.login(user,async(err)=> { 
                //req.login은 passport.serializeUser호출
                if(err){
                    console.error(err);
                    return next(err);
                }
                const fullUser = await db.User.findOne({
                    where :{ id: user.id},
                    attributes :['id' , 'nickName' ,'email'],
                    include :[{
                        model : db.User,
                        as : 'Followings',
                        attributes:['id']
                    },
                    {
                        model: db.User,
                        as : 'Followers',
                        attributes :['id']
                    },
                    {
                        model:db.Post,
                        attribute : ['id']
                    }
                ]
                });
                return res.json(fullUser);
            });
        })(req,res,next);
    

        // return res.status(201).json(newUser);
    }catch(err) {
        console.log(err);
        next(err);
    }
});

//로그인
router.post('/login',isNotLoggedIn ,(req,res,next) => {
 //express.json() , urlencoded 로 req.body 에 들어감
 //passport 로컬 스토리지에보냄 
 //localstrategy 에서 성공시 콜백함수로 다시 돌아옴
 //성공시 user 
    passport.authenticate('local',(err,user,info)=>{
        //에러시나 info 에 정보 (실패사유)
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }

        //app.use(passport.initilaize())때문에 사용가능한 req.login()
        //세션에다 사용자 정보 저장 (어떻게? serializeUser)
        //프론트에 쿠키 내려보내주는함수
        return req.login(user,async(err)=> { 
            //req.login은 passport.serializeUser호출
            if(err){
                console.error(err);
                return next(err);
            }
            const fullUser = await db.User.findOne({
                where :{ id: user.id},
                attributes :['id' , 'nickName' ,'email'],
                include :[{
                    model : db.User,
                    as : 'Followings',
                    attributes:['id']
                },
                {
                    model: db.User,
                    as : 'Followers',
                    attributes :['id']
                }, 
                {
                    model : db.Post,
                    attributes : ['id']
                }]
            });
            console.log(fullUser);
            return res.json(fullUser);
        });
    })(req,res,next);

});

//로그아웃
router.post('/logout',isLoggedIn,(req,res)=> {
    if(req.isAuthenticated()){
        req.logout();
        req.session.destroy(); //선택사항
        return res.status(200).send('로그아웃되었습니다.');
    }
});

//팔로우
router.post('/:id/follow',isLoggedIn, async(req,res,next)=>{
    try{
        const me = await db.User.findOne({
            where :{ id: req.user.id}
        });
        await me.addFollowing(req.params.id);
        return res.send(req.params.id);
    }catch(e){
        console.error(e);
        next(e);
    }
});

router.delete('/:id/follow',isLoggedIn, async(req,res,next)=>{
    try{
        const me = await db.User.findOne({
            where :{ id: req.user.id}
        });
        await me.removeFollowing(req.params.id);
        return res.send(req.params.id);

    }catch(e){
        console.error(e);
        next(e);
    }
});

//put : 전체수정 , patch : 부분수정
router.patch('/nickName',isLoggedIn, async(req,res,next)=>{
    try{
        await db.User.update({
            nickName :  req.body.nickName           
        }, {
            where : {id: req.user.id }
        });
        return res.send(req.body.nickName);
    }catch(e){
        console.error(e);
        next(e);
    }
});

router.get('/:id/followings', isLoggedIn , async(req,res,next)=>{
    try{    
        console.log('???????????????????');
        const me = await db.User.findOne({
            where :{ id: req.user.id}
        });
        const followings =await me.getFollowings ({
            attributes :['id','nickName'],
            limit : parseInt(req.query.limit || 3, 10),
            offset : parseInt(req.query.offset || 0, 10),
        });
        res.json(followings);

    }catch(e){
        console.error(e);
        next(e);
    }
    
});

router.get('/:id/followers', isLoggedIn , async(req,res,next)=>{
    try{    
        const me = await db.User.findOne({
            where :{ id: req.user.id}
        });
        const followers =await me.getFollowers ({
            attributes :['id','nickName'],
            limit : parseInt(req.query.limit || 3, 10),
            offset : parseInt(req.query.offset || 0, 10),
        });
        res.json(followers);

    }catch(e){
        console.error(e);
        next(e);
    }
    
});
//나를 팔로잉 한사람 제거
router.post('/:id/removeFollowing', isLoggedIn , async(req,res,next)=>{
    try{
        const me = await db.User.findOne({
            where :{ id: req.user.id}
        });
        await me.removeFollowing(req.params.id);
        
        return res.send(req.params.id);

    }catch(e){
        console.error(e);
        next(e);
    }
});
//내가팔로우하는사람 제거
router.delete('/:id/removeFollwer', isLoggedIn , async(req,res,next)=>{
    try{
        const me = await db.User.findOne({
            where :{ id: req.user.id}
        });
        await me.removeFollower(req.params.id);
        
        return res.send(req.params.id);

    }catch(e){
        console.error(e);
        next(e);
    }
});

router.get('/:id',async(req,res,next)=>{
    try{

        // let where = {
        //     id: parseInt(req.params.id,10),
        //     RetweetId : null       }

        const fullUser = await db.User.findOne({
            where :{ id: parseInt(req.params.id,10)},
            attributes :['id' , 'nickName' ,'email'],
            include :[{
                model : db.User,
                as : 'Followings',
                attributes:['id']
            },
            {
                model: db.User,
                as : 'Followers',
                attributes :['id']
            }, 
            {
                model : db.Post,
                attributes : ['id'],
                where : {
                    RetweetId : null
                }
            }]
        });
        console.log("다른새끼요",fullUser)
        return res.json(fullUser);
    }catch(e){
        console.error(e);
        next(e);
    }
});


router.get('/:id/posts',async(req,res ,next)=>{
    try{
        let where ={
            UserId : parseInt(req.params.id,10),
            RetweetId : null
        };
        if( parseInt(req.query.lastId,10)){
            where[db.Sequelize.Op.lt] = parseInt(req.query.lastId,10);
        }
        const posts = await  db.Post.findAll({
         
            where ,
            include: [{
                model : db.User,
                attributes : ['id' , 'nickName'],
            }, {
                model: db.Image,
            } ,{
                model : db.User,
                through : 'Like',
                as : 'Likers',
                attributes: ['id'],
            }
        ],
            order : [['createdAt','DESC']],
            limit : parseInt(req.query.limit,10)||10 ,
        });

        return res.json(posts);
    }catch(e){
        console.error(e);
        next(e);
    }
  

});

module.exports = router;