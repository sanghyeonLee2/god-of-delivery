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
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored:true,
            modelName: 'Cart',
            tableName: 'carts',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.Cart.belongsTo(db.Store,{foreignKey: 'storeId', targetKey:'storeId'})
        db.Cart.belongsTo(db.User,{foreignKey: 'userId', targetKey:'userId'})
        db.Cart.hasMany(db.CartItem, {foreignKey: 'cartId', sourceKey: 'cartId', onDelete: 'CASCADE', hooks:true})
    }
}

module.exports = Cart;