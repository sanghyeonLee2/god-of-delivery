const Sequelize = require('sequelize');

class MenuOption extends Sequelize.Model {
    static initate(sequelize) {
        MenuOption.init({
            menuOptionId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            option:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            content:{
              type: Sequelize.STRING,
              allowNull: false,
            },
            price:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            modifiedDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            status: {
                type: Sequelize.ENUM('일반'),
                defaultValue: '일반',
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'MenuOption',
            tableName: 'menuoption',
        })
    }
    static associate(db){
        db.MenuOption.hasMany(db.Cart, {foreignKey:'menuOptionId', sourceKey:'menuOptionId'})
        db.MenuOption.belongsTo(db.Menu, {foreignKey:'menuId', targetKey:'menuId'})
    }
}

module.exports = MenuOption;