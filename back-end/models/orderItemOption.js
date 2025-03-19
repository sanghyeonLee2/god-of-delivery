const Sequelize = require('sequelize');

class OrderItemOption extends Sequelize.Model {
    static initate(sequelize) {
        OrderItemOption.init({
            orderItemOptionId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            optionNameSnapshot: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            optionPriceSnapshot: {
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
            modelName: 'OrderItemOption',
            tableName: 'order_item_options',
        })
    }
    static associate(db) {
        db.OrderItemOption.belongsTo(db.OrderItem,{foreignKey:'orderItemId', targetKey:'orderItemId', onDelete: 'CASCADE', hooks:true})
        db.OrderItemOption.belongsTo(db.MenuOption,{foreignKey:'menuOptionId', targetKey:'menuOptionId', onDelete: 'SET NULL', hooks:true})
    }
}

module.exports = OrderItemOption;