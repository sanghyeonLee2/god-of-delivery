const Sequelize = require('sequelize');

class Review extends Sequelize.Model {
    static initate(sequelize) {
        Review.init({
            reviewId:{
                type: Sequelize.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement:true
            },
            rating:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            img:{
                type: Sequelize.TEXT
            }
        },{
            sequelize,
            timestamps: true,
            createdAt: true,
            updatedAt: true,
            underscored: true,
            modelName: 'Review',
            tableName: 'reviews',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db){
        db.Review.belongsTo(db.Store,{foreignKey:'storeId', targetKey:'storeId', onDelete: 'CASCADE', hooks:true})
        db.Review.belongsTo(db.User,{foreignKey:'userId', targetKey:'userId', onDelete: 'CASCADE', hooks:true})
        db.Review.belongsTo(db.Order,{foreignKey:'orderId', targetKey:'orderId'})
        db.Review.hasOne(db.CeoReview, {foreignKey: 'reviewId', sourceKey:'reviewId'})
    }
}

module.exports = Review;