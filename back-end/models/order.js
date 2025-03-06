const Sequelize = require('sequelize');

class Order extends Sequelize.Model {
    static initate(sequelize) {
        Order.init({
            orderId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            paymentMethod: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            totalPrice: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            requests:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            addressSnapshot:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            type:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            status:{
                type: Sequelize.ENUM('접수 중', '준비 중', '완료', '취소'),
                defaultValue:'접수 중',
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'Order',
            tableName: 'orders',
        })
    }
    static associate(db) {
        db.Order.hasMany(db.OrderItem,{foreignKey:'orderId', sourceKey:'orderId'})
        db.Order.hasMany(db.Review, {foreignKey:'orderId', sourceKey:'orderId'})
        db.Order.belongsTo(db.Store,{foreignKey:'storeId', targetKey:'storeId', onDelete: 'SET NULL', hooks:true})
        db.Order.belongsTo(db.User,{foreignKey:'userId', targetKey:'userId', onDelete: 'SET NULL', hooks:true})
    }
}

module.exports = Order;