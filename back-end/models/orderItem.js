const Sequelize = require('sequelize');

class OrderItem extends Sequelize.Model {
    static initate(sequelize) {
        OrderItem.init({
            orderItemId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            menuNameSnapshot: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            menuPriceSnapshot: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            quantity:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'OrderItem',
            tableName: 'order_items',
        })
    }
    static associate(db) {
        db.OrderItem.belongsTo(db.Order,{foreignKey:'orderId', targetKey:'orderId'})
        db.OrderItem.belongsTo(db.Menu, {foreignKey:'menuId', targetKey:'menuId'})
        db.OrderItem.hasMany(db.OrderItemOption,{foreignKey:'orderItemId', sourcekey:'orderItemId', onDelete: 'CASCADE', hooks:true})
    }
}

module.exports = OrderItem;