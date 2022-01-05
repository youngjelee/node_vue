const express = require('express');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require('passport');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const hashtagsRouter = require('./routes/hashtag');

//force:true 시 서버기동때마다 스키마 초기화
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use('/',express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser('cookiesecret'));

////////////////////////////로그인//////////////////////
app.use(session({
    resave: false,  //resave 세션에 변화가 없어도 다시저장?
    saveUninitialized: false,   //세션 값없을때 공백값을 넣을건지?
    secret: 'cookiesecret',     //세션암호화
    cookie :{
        httpOnly : true,
        secure : false
    }
}));

app.use(passport.initialize());
app.use(passport.session());
//////////////////////////////////////////////////////////

app.use(cors({origin:'http://localhost:3080',credentials:true} ));
//  app.use(cors());

app.get('/',(req,res) => {
    res.send('안녕 w제로초');
});

//로그인 관련 라우터 
app.use('/user',usersRouter);
//게시글 관련 라우터
app.use('/post',postRouter);
//게시글 관련 라우터
app.use('/posts',postsRouter);

app.use('/hashtag',hashtagsRouter);



app.listen(3085, ()=> {
    console.log("백앤드서버");
});