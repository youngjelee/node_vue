module.exports = (sequelize, DataTypes)=> {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(40),
            allowNull : false,
            uique : true,
        },
        nickName:{
            type: DataTypes.STRING(30),
            allowNull : false,
        },
        password : {
            type: DataTypes.STRING(200),
            allowNull : false,
        }
    }, {
        charset : 'utf8',
        collate : 'utf8_general_ci' , //한글저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Comment);
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.Post , {through : 'Like' , as : 'Liked'});
        db.User.belongsToMany(db.User , {through :'Follow', as: 'Followers' , foreignKey : 'followingId' });
        db.User.belongsToMany(db.User , {through :'Follow', as: 'Followings' , foreignKey : 'followerId' });
    };
    return User;
}