const Sequelize = require("sequelize");

class MenuOption extends Sequelize.Model {
  static initate(sequelize) {
    MenuOption.init(
      {
        menuOptionId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        price: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        underscored: true,
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        modelName: "MenuOption",
        tableName: "menu_options",
      },
    );
  }
  static associate(db) {
    db.MenuOption.belongsTo(db.MenuCategory, {
      foreignKey: "menuCategoryId",
      targetKey: "menuCategoryId",
      onDelete: "CASCADE",
      hooks: true,
    });
    db.MenuOption.hasMany(db.OrderItemOption, {
      foreignKey: "menuOptionId",
      sourceKey: "menuOptionId",
    });
    db.MenuOption.hasMany(db.CartItemOption, {
      foreignKey: "menuOptionId",
      sourceKey: "menuOptionId",
    });
  }
}

module.exports = MenuOption;
