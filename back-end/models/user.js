const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static initate(sequelize) {
        User.init({
            userId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            password:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            name:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            phone:{
                type: Sequelize.STRING(11),
                allowNull: false,
            },
            grade:{
                type: Sequelize.ENUM('고마운분','귀한분','더 귀한 분', '천생연분'),
                defaultValue: '고마운분',
                allowNull: false,
            },
            role:{
                type: Sequelize.ENUM('회원', '관리자', '점주', '배달기사'),
                defaultValue : '회원',
                allowNull: false,
            },
            currentAddress:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            modifiedDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            status:{
                type: Sequelize.ENUM('일반'),
                defaultValue:'일반',
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.User.hasMany(db.Order, {foreignKey: 'userId', sourceKey: 'userId'})
        db.User.hasMany(db.Coupon, {foreignKey: 'userId', sourceKey: 'userId'})
        db.User.hasMany(db.Address, {foreignKey: 'userId', sourceKey: 'userId'})
        db.User.hasMany(db.Cart, {foreignKey: 'userId', sourceKey: 'userId'})
        db.User.hasMany(db.Review, {foreignKey: 'userId', sourceKey: 'userId'})
        db.User.hasMany(db.Dib, {foreignKey: 'userId', sourceKey: 'userId'})
    }
}

module.exports = User;