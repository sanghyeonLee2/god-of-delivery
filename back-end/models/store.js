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
            name:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            type:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue:0
            },
            category:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            address:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            storePictureUrl:{
                type: Sequelize.TEXT,
                allowNull: true,
            },
            phone:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
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
            closedDays:{
                type: Sequelize.STRING,
                allowNull: true
            },
            deliveryAddress:{
                type: Sequelize.STRING,
                allowNull: true
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
                type: Sequelize.STRING,
                defaultValue:'일반',
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: false,
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