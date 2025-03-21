const Sequelize = require("sequelize");

class StoreImage extends Sequelize.Model {
  static initate(sequelize) {
    StoreImage.init(
      {
        storeImageId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        storePictureUrl: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM("일반"),
          defaultValue: "일반",
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        underscored: true,
        modelName: "StoreImage",
        tableName: "storeimages",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      },
    );
  }
  static associate(db) {
    db.StoreImage.belongsTo(db.Store, {
      foreignKey: "storeId",
      targetKey: "storeId",
      onDelete: "CASCADE",
      hooks: true,
    });
  }
}

module.exports = StoreImage;
