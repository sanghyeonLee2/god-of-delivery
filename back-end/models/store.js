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
            storeCategory:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            storeAddress:{
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            storeLogoImage:{
                type: Sequelize.TEXT,
                allowNull: true,
            },
            latitude:{
              type: Sequelize.FLOAT(9,6),
              allowNull: false,
            },
            longitude:{
                type: Sequelize.FLOAT(9,6),
                allowNull: false,
            },
            operationHour:{
              type: Sequelize.STRING(45)
            },
            dayOff:{
                type: Sequelize.STRING(45),
            },
            storeNumber:{
                type: Sequelize.STRING(45),
            },
            area:{
                type: Sequelize.STRING(45),
            },
            introduction:{
                type: Sequelize.STRING(45),
            },
            deliveryTipInfo:{
                type: Sequelize.STRING(45),
            },
            owner:{
                type: Sequelize.STRING(45),
            },
            businessNum:{
                type: Sequelize.STRING(45),
            },
            origin:{
                type: Sequelize.STRING(45),
            },
            takeoutMinPrice:{
                type: Sequelize.STRING(20),
            },
            takeoutDiscount:{
                type: Sequelize.INTEGER,
            },
            takeoutPickupTime:{
                type: Sequelize.STRING(45),
            },
            takeoutPayment:{
                type: Sequelize.STRING(45),
            },
            deliveryTime:{
                type: Sequelize.STRING(45),
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
            deliveryPayment:{
                type: Sequelize.STRING(45),
            },
            notice:{
                type: Sequelize.STRING(45),
            },
            rating:{
                type: Sequelize.DECIMAL(1,1),
                defaultValue:0
            },
            reviewCnt:{
                type: Sequelize.BIGINT,
                defaultValue:0
            },
            dips:{
                type:Sequelize.BIGINT,
                defaultValue:0
            }
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
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