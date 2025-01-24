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
            option:{
                type: Sequelize.STRING,
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
        }, {
            sequelize,
            timestamps: false,
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
        db.MenuOption.belongsTo(db.Menu, {foreignKey:'menuId', targetKey:'menuId'})
    }
}

module.exports = MenuOption;