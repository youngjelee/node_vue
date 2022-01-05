const express = require('express');
const {isLoggedIn,  isNotLoggedIn} = require('./middlewares');
const router = express.Router();
const multer = require('multer'); //파일 서버 업로드 모듈
const path = require('path'); //노드 기본모듈
const db = require('../models');

const upload = multer( {
    storage : multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname,ext);
            done(null,basename +"_"+ Date.now() + ext);
        }
    }),
    limit : { fileSize : 20*1024*1024}
})

router.post('/images', isLoggedIn, upload.array('image'),  (req,res)=> {
    // req.files = [{filename :'~~시간.확장자 '},{filename :'~~시간.확장자 '}];
    console.log("서버에서 확인하는 파일들" , req.files);
    
    return res.json(req.files.map(v=>v.filename));

});

router.post('/', isLoggedIn, async (req,res,next)=> {
    try{
        // req.body.content,
        // req.body.imagePaths,
        //해쉬태그 content 내부 #string 찾기
        const hashtags = req.body.content.match(/#[^\s#]+/g);
        //post 생성
        const newPost = await db.Post.create({
            content : req.body.content,
            UserId : req.user.id,
        });
        // const newIamge = await db.Image.create({
        //     src : req.body.
        //     PostId : newPost.id,
        // });

        //해쉬태그 존재시  
        if(hashtags){
           const result = await  Promise.all(hashtags.map(tag =>db.Hashtag.findOrCreate({
               where: { name : tag.slice(1).toLowerCase()},
           })));
           await newPost.addHashtags(result.map(r=>r[0]));
        }

        //이미지 존재시 
        if(req.body.image){
            if(Array.isArray(req.body.image)){
                const images = await Promise.all(req.body.image.map((image)=>{
                    return db.Image.create({
                        src : image , PostId : newPost.id
                    });
                }))
            }else{
                const image = await db.Image.create({
                    src: req.body.image , PostId : newPost.id
                })
            }
        }
        const fullPost = await db.Post.findOne({
            where : { id: newPost.id},
            include: [
                { model: db.User, attributes : ['id' , 'nickName'],},
                { model: db.Image, }
                ,{
                    model : db.User,
                    as : 'Likers',
                    attributes: ['id'],
                }
        ],
        });

        return res.json(fullPost);

    }catch(err){
        console.error(err);
        next(err);
    }
});
router.get('/:id/comments',async(req,res,next) => {
    try{
        const post = await db.Post.findOne({where : {id: req.params.id}});
        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        const comments = await db.Comment.findAll({
            where : { PostId: req.params.id},
            include : [{
                model: db.User,
                attributes : ['id' , 'nickName']
            }],
            order:[['createdAt' ,'ASC']]        //이차원 배열 : 정렬조건 이 한가지가 아니기때문 .
        });

        // console.log("코멘츠들",comments);
        
        res.json(comments);
    }catch(err){
        console.error(err);
        next(err);
    }
});


    //댓글 작성 메서드
router.post('/:id/comment',isLoggedIn , async(req,res,next) =>{
    try{
        const post = await db.Post.findOne({where : {id: req.params.id}});

        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }

        const newComment = await db.Comment.create({
            PostId : post.id,
            UserId : req.user.id,
            content : req.body.content,
        });
        // await post.addComment(newComment.id);  // 할 시에 PostId : post.id 를 대체함

        const commentInfo = await db.Comment.findOne({
           where : { id: newComment.id},
           include:[{
               model:db.User,
               attributes : ['id','nickName']
           }] 
        });
        return res.json(commentInfo);
    }catch(err) {
        console.error(err);
        next(err);
    }
});

router.get('/:id',async(req,res) => {     //GET /post/1
    try{
    
        const posts = await  db.Post.findAll({
           where : { id: req.params.id}
           ,
            include: [{
                model : db.User,
                attributes : ['id' , 'nickName'],
            }, {
                model: db.Image,
            } ,{
                model : db.User,
                as : 'Likers',
                attributes: ['id'],
            },{
               model: db.Post,
               as: 'Retweet' ,
               include :[{
                   model: db.User,
                   attributes: ['id' ,'nickName'],
               } ,{
                   model: db.Image,
               }] 
            }
        ]
        });
        return res.json(posts);
    }catch(e){
        console.error(e);
    }
  
});



//
router.delete('/:id',async (req,res,next) => {
    try{
        console.log("삭제해보자");
        console.log(req.params.id);
        await db.Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send('삭제했습니다');
    }catch(err){
        console.error(err);
        next(err);
    }
});

//수정 구현하기 put, patch
router.put('/:id', async (req,res,next) =>{
    try{

    }catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/:id/retweet', isLoggedIn, async(req,res,next)=> {

    try{
        const post = await db.Post.findOne({
            where :{ id: req.params.id},
            include : [{
                model : db.Post , 
                as : 'Retweet' , //리트윗한 게시글이면 원본 게시글
            }]
        });

        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        if(req.user.id === post.UserId||
            (post.Retweet && post.Retweet.UserId === req.user.id)){
                return res.status(403).send('자신의 글은 리트윗 할수 없습니다.');
            }
        
        const retweetTargetId = post.RetweetId || post.id; 
        const exPost = await db.Post.findOne({
            where : {
                UserId: req.user.id,
                RetweetId :  retweetTargetId,       
            }
        });
        if(exPost){
            return res.status(403).send('이미 리트윗했습니다.');
        }
        const retweet = await db.Post.create({
            UserId : req.user.id,
            RetweetId : retweetTargetId,    //원본아이디
            content: 'retweet',
        });

        const retweetWithPrevPost = await db.Post.findOne({
            where : { id: retweet.id},
            include : [{
                model : db.User,
                attributes:['id','nickName'],
            },{
                model : db.User,
                as : 'Likers',
                attributes: ['id'],
            } ,{
                model: db.Post, 
                as:'Retweet',
                include :[{
                    model: db.User,
                    attributes : ['id' , 'nickName']
                }, {
                    model: db.Image
                }]
            }
        ]
        });
        return res.json(retweetWithPrevPost);
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/:id/like', isLoggedIn , async(req,res,next)=>{
    try{
        const post = await db.Post.findOne({
            where : { id: req.params.id}
        });
        if(!post){
            return res.status(404).send('포스트가 존재하지않습니다');
        } 
        await post.addLiker(req.user.id);
        res.json({userId:req.user.id});
    }catch(err){
        console.log(err);
        next(err);
    }
});
router.delete('/:id/like', isLoggedIn , async(req,res,next)=>{
    try{
        const post = await db.Post.findOne({
            where : { id: req.params.id}
        });
        if(!post){
            return res.status(404).send('포스트가 존재하지않습니다');
        } 
        await post.removeLiker(req.user.id);
        res.json({userId:req.user.id});
    }catch(err){
        console.log(err);
        next(err);
    }
});

module.exports = router;