const Sequelize = require("sequelize");

class Dib extends Sequelize.Model {
    static initate(sequelize) {
        Dib.init({
            userId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'users', // User 모델 참조
                    key: 'userId'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            storeId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'stores', // Store 모델 참조
                    key: 'storeId'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
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
            underscored:true,
            modelName: 'Dib',
            tableName: 'dibs',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.Dib.belongsTo(db.User, {foreignKey:'userId', targetKey:'userId'})
        db.Dib.belongsTo(db.Store, {foreignKey:'storeId', targetKey:'storeId'})
    }
}

module.exports = Dib;