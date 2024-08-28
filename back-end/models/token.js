const Sequelize = require("sequelize");

class Token extends Sequelize.Model {
    static initate(sequelize) {
        Token.init({
            userId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'users', // User 모델 참조
                    key: 'userId'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                primaryKey: true
            },
            token:{
                type: Sequelize.STRING,
                allowNull: true,
            }
        },{
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'Token',
            tableName: 'tokens',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db){
        db.Token.belongsTo(db.User, {foreignKey: 'userId', targetKey: 'userId'})
    }
}

module.exports = Token