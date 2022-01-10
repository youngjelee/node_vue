const express = require('express');
const db = require('./models');
const passportConfig = require('./passport');
const passport = require('passport');

const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');
const dotenv = require('dotenv');

const prod = process.env.NODE_ENV==='production';
const usersRouter = require('./routes/user');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const hashtagsRouter = require('./routes/hashtag');
const app = express();

dotenv.config();
//force:true 시 서버기동때마다 스키마 초기화
db.sequelize.sync();
passportConfig();

if(prod){
    app.use(helmet());
    app.use(hpp());
    app.use(morgan('dev'));
    app.use(cors({origin:'http://younge.xyz',
    credentials:true} ));
//  app.use(cors());
}else{
    app.use(morgan('dev'));
    app.use(cors({origin:'http://localhost:3080',
    credentials:true} ));
}


app.use('/',express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));

////////////////////////////로그인//////////////////////
app.use(session({
    resave: false,  //resave 세션에 변화가 없어도 다시저장?
    saveUninitialized: false,   //세션 값없을때 공백값을 넣을건지?
    secret: process.env.COOKIE_SECRET,     //세션암호화
    cookie :{
        httpOnly : true,
        secure : false,
        domain: prod &&'.younge.xyz',
    }
}));

app.use(passport.initialize());
app.use(passport.session());
//////////////////////////////////////////////////////////



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



app.listen(prod ? process.env.PORT : 3085, ()=> {
    console.log(`백앤드서버 {prod ? process.env.PORT : 3085}`);
});