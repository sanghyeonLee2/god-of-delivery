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
            description:{
                type: Sequelize.STRING,
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
            modelName: 'Menu',
            tableName: 'menus',
        })
    }
    static associate(db){
        db.Menu.hasMany(db.MenuCategory, {foreignKey:'menuId', sourceKey:'menuId'})
        db.Menu.hasMany(db.OrderItem,{foreignKey:'menuId', sourceKey:'menuId'})
        db.Menu.belongsTo(db.Store, {foreignKey:'storeId', targetKey:'storeId', onDelete: 'CASCADE', hooks:true})
        db.Menu.hasMany(db.CartItem, {foreignKey:'menuId', sourceKey:'menuId'})
    }
}

module.exports = Menu;
