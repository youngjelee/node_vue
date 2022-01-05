module.exports = (sequelize,DataTypes) => {
    const Image = sequelize.define('Image',{
        src : {
            type: DataTypes.STRING(200),
            allowNull:false,
        },
    }, {
        charset : 'utf8',
        collate : 'utf8_general_ci' , //한글저장
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);    //PostId 컬럼 같이생성
    };
    return Image ;
};