const Sequelize = require("sequelize");

class CartItem extends Sequelize.Model {
  static initate(sequelize) {
    CartItem.init(
      {
        cartItemId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        quantity: {
          type: Sequelize.BIGINT,
          allowNull: false,
          defaultValue: 1,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        underscored: true,
        modelName: "CartItem",
        tableName: "cart_items",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      },
    );
  }
  static associate(db) {
    db.CartItem.belongsTo(db.Cart, {
      foreignKey: "cartId",
      targetKey: "cartId",
      onDelete: "CASCADE",
      hooks: true,
    });
    db.CartItem.hasMany(db.CartItemOption, {
      foreignKey: "cartItemId",
      sourceKey: "cartItemId",
    });
    db.CartItem.belongsTo(db.Menu, {
      foreignKey: "menuId",
      targetKey: "menuId",
      onDelete: "SET NULL",
      hooks: true,
    });
  }
}

module.exports = CartItem;
