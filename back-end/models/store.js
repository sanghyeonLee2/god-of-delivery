const Sequelize = require('sequelize');

class Store extends Sequelize.Model {
    static initate(sequelize) {
        Store.init({
            storeId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey:true,
                autoIncrement: true,
            },
            storeName:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            storeType:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue:0
            },
            storeCategory:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            storeAddress:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            storePicture:{
                type: Sequelize.TEXT,
                allowNull: true,
            },
            storePhone:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            minDeliveryPrice:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            deliveryTip:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue:0
            },
            minDeliveryTime:{
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue:null
            },
            maxDeliveryTime:{
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue:null
            },
            rating:{
                type: Sequelize.DECIMAL(2,1),
                allowNull: false,
                defaultValue:0
            },
            dibsCount:{
                type:Sequelize.INTEGER,
                allowNull: false,
                defaultValue:0
            },
            reviewCount:{
              type:Sequelize.INTEGER,
              allowNull:false,
              defaultValue:0
            },
            operationHours:{
                type:Sequelize.STRING,
                allowNull: true,
            },
            deliveryAddress:{
                type: Sequelize.STRING,
                allowNull: true
            },
            latitude:{
              type: Sequelize.FLOAT(9,6),
              allowNull: false,
            },
            longitude:{
                type: Sequelize.FLOAT(9,6),
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt:'updateTimestamp',
            underscored: true,
            modelName: 'Store',
            tableName: 'stores',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db){
        db.Store.hasMany(db.Order, {foreignKey:'storeId', sourceKey:'storeId'})
        db.Store.hasMany(db.Cart, {foreignKey:'storeId', sourceKey:'storeId'})
        db.Store.hasMany(db.Menu, {foreignKey:'storeId', sourceKey:'storeId'})
        db.Store.hasMany(db.Review, {foreignKey:'storeId', sourceKey:'storeId'})
        db.Store.hasMany(db.StoreImage, {foreignKey:'storeId', sourceKey:'storeId'})
        db.Store.hasMany(db.Dib, {foreignKey:'storeId', sourceKey:'storeId'})
    }
}

module.exports = Store;