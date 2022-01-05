const passport = require('passport');
const local = require('./local');
const db = require('../models');
module.exports = () => {
    console.log("실행순서 1")
    passport.serializeUser ( (user,done)=> {
        console.log("serializeUser함수실행");
        return done(null,user.id);
    });


    passport.deserializeUser( async (id,done)=> {
        //로그후 모든요청에
        //passport.session미들웨어가 이 함수호출
        console.log("deserializeUser함수실행");
            try{
                const exUser = await db.User.findOne({
                    where : {id},
                    attributes:['id' , 'nickName'] ,
                    include : [{
                        model:db.User,
                        as : 'Followers',
                        attributes : ['id']
                        },{ 
                        model : db.User,
                        as : 'Followings',
                        attributes: ['id']
                        },{
                            model: db.Post,
                            attributes: ['id']
                        }
                        ]
                });
                //req.exUser, req.isAuthenticated()===true
                return done(null,exUser);
                
            }catch(err){
                console.error(err);
                return done(err);
            }
        });
    local();

}