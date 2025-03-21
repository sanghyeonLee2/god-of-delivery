const Sequelize = require("sequelize");

class CartItemOption extends Sequelize.Model {
  static initate(sequelize) {
    CartItemOption.init(
      {
        cartItemOptionId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        underscored: true,
        modelName: "CartItemOption",
        tableName: "cart_item_options",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      },
    );
  }
  static associate(db) {
    db.CartItemOption.belongsTo(db.CartItem, {
      foreignKey: "cartItemId",
      targetKey: "cartItemId",
      onDelete: "CASCADE",
      hooks: true,
    });
    db.CartItemOption.belongsTo(db.MenuOption, {
      foreignKey: "menuOptionId",
      targetKey: "menuOptionId",
      onDelete: "SET NULL",
      hooks: true,
    });
  }
}

module.exports = CartItemOption;
