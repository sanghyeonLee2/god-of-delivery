const Sequelize = require('sequelize');

class MenuOption extends Sequelize.Model {
    static initate(sequelize) {
        MenuOption.init({
            menuOptionId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            content: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            price: {
                type: Sequelize.BIGINT,
                allowNull: false,
            },
            isChecked: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'MenuOption',
            tableName: 'menuoptions',
        })
    }
    static associate(db){
        db.MenuOption.hasMany(db.Cart, {foreignKey:'menuOptionId', sourceKey:'menuOptionId'})
        db.MenuOption.belongsTo(db.MenuCategory, { foreignKey: "menuCategoryId", targetKey: "menuCategoryId" });
    }
}

module.exports = MenuOption;