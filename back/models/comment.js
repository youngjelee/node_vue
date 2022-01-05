module.exports = (sequelize, DataTypes)=> {
    const Comment = sequelize.define('Comment', { //테이블명 posts
        content: {
            type: DataTypes.TEXT, //매우 긴 글 (길이제한 x)
            allowNull : false,
            uique : true,
        }, //createdAt, updatedAt 자동생성
        
    }, {
        charset : 'utf8mb4',        //mb4 : 이모티콘 허용
        collate : 'utf8mb4_general_ci' , //한글저장
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}