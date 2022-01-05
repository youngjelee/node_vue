exports.isLoggedIn = (req,res,next) =>{
    if(req.isAuthenticated()){
        //next() -> 인수가 없을 시 다음 미들웨어로 넘어감
        //next(abc) -> 에러처리..
        return next();
    }
    return res.status(401).send('로그인이 필요합니다');
}

exports.isNotLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        return next();
    }
    return res.status(401).send('로그인시 이용할수 없습니다.');
};