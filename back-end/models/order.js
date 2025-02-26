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
            status:{
                type: Sequelize.ENUM('정상', '이상'),
                defaultValue:'정상',
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

        db.Order.belongsTo(db.Store,{foreignKey:'storeId', targetKey:'storeId'})
        db.Order.belongsTo(db.User,{foreignKey:'userId', targetKey:'userId'})
    }
}

module.exports = Order;