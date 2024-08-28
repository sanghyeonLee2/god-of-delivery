const Sequelize = require("sequelize");

class Cart extends Sequelize.Model {
    static initate(sequelize) {
        Cart.init({
            cartId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            quantity: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                defaultValue: 1,
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
            underscored:true,
            modelName: "Cart",
            tableName: 'carts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.Cart.belongsTo(db.Store,{foreignKey: 'storeId', targetKey:'storeId'})
        db.Cart.belongsTo(db.Menu,{foreignKey: 'menuId', targetKey:'menuId'})
        db.Cart.belongsTo(db.Order,{foreignKey: 'orderId', targetKey:'orderId'})
        db.Cart.belongsTo(db.User,{foreignKey: 'userId', targetKey:'userId'})
        db.Cart.belongsTo(db.MenuOption,{foreignKey: 'menuOptionId', targetKey:'menuOptionId'})
    }
}

module.exports = Cart;