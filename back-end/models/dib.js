const Sequelize = require("sequelize");

class Dib extends Sequelize.Model {
    static initate(sequelize) {
        Dib.init({
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
        db.Dib.belongsTo(db.User, {foreignKey:'userId', targetKey:'userId', onDelete: 'CASCADE', hooks:true})
        db.Dib.belongsTo(db.Store, {foreignKey:'storeId', targetKey:'storeId', onDelete: 'CASCADE', hooks:true})
    }
}

module.exports = Dib;