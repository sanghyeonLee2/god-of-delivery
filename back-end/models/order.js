const Sequelize = require('sequelize');

class Order extends Sequelize.Model {
    static initate(sequelize) {
        Order.init({
            orderId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
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
            createdDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            modifiedDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            status:{
                type: Sequelize.ENUM('정상', '이상'),
                defaultValue:'정상',
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'Order',
            tableName: 'orders',
        })
    }
    static associate(db) {
        db.Order.hasMany(db.Cart,{foreignKey: 'orderId', sourceKey: 'orderId'})
        db.Order.belongsTo(db.Store,{foreignKey:'storeId', targetKey:'storeId'})
        db.Order.belongsTo(db.User,{foreignKey:'userId', targetKey:'userId'})
    }
}

module.exports = Order;