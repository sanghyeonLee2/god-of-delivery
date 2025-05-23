const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initate(sequelize) {
    User.init(
      {
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
        },
        userPw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        role: {
          type: Sequelize.ENUM('user', 'owner'),
          defaultValue: "user",
          allowNull: false,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        latitude: {
          type: Sequelize.DECIMAL(17, 14)
        },
        longitude: {
          type: Sequelize.DECIMAL(17, 14)
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        underscored: true,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      },
    );
  }
  static associate(db) {
    db.User.hasMany(db.Order, { foreignKey: "userId", sourceKey: "userId" });
    db.User.hasOne(db.Cart, { foreignKey: "userId", sourceKey: "userId" });
    db.User.hasMany(db.Review, { foreignKey: "userId", sourceKey: "userId" });
    db.User.hasMany(db.Dib, { foreignKey: "userId", sourceKey: "userId" });
    db.User.hasOne(db.Token, { foreignKey: "userId", sourceKey: "userId" });
    db.User.hasOne(db.Store, { foreignKey: "userId", sourceKey: "userId" });
    db.User.hasMany(db.CeoReview, {
      foreignKey: "userId",
      sourceKey: "userId",
    });
  }
}

module.exports = User;
