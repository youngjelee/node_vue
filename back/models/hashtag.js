module.exports = (sequelize,DataTypes) => {
    const Hashtag = sequelize.define('Hashtag',{
        name: {
            type:DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset : 'utf8mb4',        //mb4 : 이모티콘 허용
        collate : 'utf8mb4_general_ci' , //한글저장 
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post,{through : 'PostHashtag'})
    };
    return Hashtag;
};