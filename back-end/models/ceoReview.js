const Sequelize = require("sequelize");

class CeoReview extends Sequelize.Model {
    static initate(sequelize) {
        CeoReview.init({
            reviewId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
            },
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            modelName: 'CeoReview',
            tableName: 'ceo_reviews',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.CeoReview.belongsTo(db.Review, {foreignKey:'reviewId', targetKey:'reviewId', onDelete: 'CASCADE', hooks:true});
    }
}

module.exports = CeoReview;