const Sequelize = require("sequelize");

class CeoReview extends Sequelize.Model {
    static initate(sequelize) {
        CeoReview.init({
            reviewId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model:'reviews',
                    key:'reviewId'
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
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
            modelName: 'CeoReview',
            tableName: 'ceoreviews',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.CeoReview.belongsTo(db.Review, {foreignKey:'reviewId', targetKey:'reviewId'});
    }
}

module.exports = CeoReview;