const Sequelize = require("sequelize");

class Dib extends Sequelize.Model {
    static initate(sequelize) {
        Dib.init({
            userId: {
                primaryKey: true,
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
                primaryKey: true,
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'stores', // Store 모델 참조
                    key: 'storeId'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            status:{
                type: Sequelize.STRING,
                defaultValue:'일반',
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
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