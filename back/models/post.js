module.exports = (sequelize, DataTypes)=> {
    const Post = sequelize.define('Post', { //테이블명 posts
        content: {
            type: DataTypes.TEXT, //매우 긴 글 (길이제한 x)
            allowNull : false,
            uique : true,
        }, //createdAt, updatedAt 자동생성
        
    }, {
        charset : 'utf8mb4',        //mb4 : 이모티콘 허용
        collate : 'utf8mb4_general_ci' , //한글저장
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); //UserId도 같이 컬럼생성됨
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User,{through: 'Like', as: 'Likers'});
        db.Post.belongsToMany(db.Hashtag,{through : 'PostHashtag'})
        db.Post.belongsTo(db.Post ,{as : 'Retweet'}); //RetweetId 생성
    };
    return Post;
}