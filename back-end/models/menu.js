const Sequelize = require('sequelize');

class Menu extends Sequelize.Model {
    static initate(sequelize) {
        Menu.init({
            menuId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            category: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            name:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            price:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            menuPictureUrl:{
                type:Sequelize.TEXT,
                allowNull: true,
            },
            popularity:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue:0,
            },
            createdDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            modifiedDate:{
                type: Sequelize.DATE,
                allowNull: false,
            },
            status:{
                type: Sequelize.ENUM('일반'),
                defaultValue:'일반',
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: true,
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            modelName: 'Menu',
            tableName: 'menus',
        })
    }
    static associate(db){
        db.Menu.hasMany(db.MenuOption, {foreignKey:'menuId', sourceKey:'menuId'})
        db.Menu.hasMany(db.Cart, {foreignKey:'menuId', sourceKey:'menuId'})
        db.Menu.hasMany(db.Review, {foreignKey:'menuId', sourceKey:'menuId'})
        db.Menu.belongsTo(db.Store, {foreignKey:'storeId', targetKey:'storeId'})
    }
}

module.exports = Menu;
