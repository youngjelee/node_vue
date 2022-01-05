const passport = require('passport');
const bcrypt = require('bcrypt');
const db = require('../models');
const { Strategy : LocalStrategy } = require('passport-local');


module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',

    }, async (email,password,done)=>{
        console.log("실행순서2",email,password);
        try{
        
            const exUser = await db.User.findOne({ where :{ email: email}});

            if(!exUser){
                return done(null, false, {reason : '존재하지 않는 사용자입니다.'});
            }
            const result = await bcrypt.compare(password,exUser.password);
            if(result){
                console.log("정상적으로 로그인"); 
                return done(null , exUser);
            }else{
                console.log("비밀번호가 틀립니다.");
                return done(null ,false , {reason : '비밀번호가 틀립니다'})
            }
        }catch(err){
            console.error(err);
        }
    }));

};