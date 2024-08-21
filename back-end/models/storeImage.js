const Sequelize = require("sequelize");

class StoreImage extends Sequelize.Model {
    static initate(sequelize){
        StoreImage.init({
            storeImageId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            storePictureUrl:{
                type: Sequelize.TEXT,
                allowNull: false,
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
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'StoreImage',
            tableName: 'storeimage',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.StoreImage.belongsTo(db.Store,{foreignKey:'storeId', targetKey:'storeId'});
    }
}

module.exports = StoreImage;

