const Sequelize = require('sequelize');

class MenuCategory extends Sequelize.Model {
    static initate(sequelize) {
        MenuCategory.init({
            menuCategoryId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            title:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            isEssential:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            maxQuantity:{
                type: Sequelize.BIGINT,
            },
        }, {
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'MenuCategory',
            tableName: 'menu_category',
        })
    }
    static associate(db){
        db.MenuCategory.belongsTo(db.Menu, { foreignKey: "menuId", targetKey: "menuId", onDelete: 'CASCADE', hooks:true});
        db.MenuCategory.hasMany(db.MenuOption, { foreignKey: "menuCategoryId", sourceKey: "menuCategoryId"});
    }
}

module.exports = MenuCategory;