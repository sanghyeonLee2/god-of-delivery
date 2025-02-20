const Sequelize = require('sequelize');

class Coupon extends Sequelize.Model {
    static initate(sequelize) {
        Coupon.init({
            couponId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            name:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            deductedPrice:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            minDeliveryPrice:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            expiredDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            status:{
                type: Sequelize.ENUM('가능', '불가능'),
                defaultValue:'가능',
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            modelName: 'Coupon',
            tableName: 'coupons',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.Coupon.belongsTo(db.User, {foreignKey: 'userId', targetKey:'userId'});
    }
}

module.exports = Coupon;