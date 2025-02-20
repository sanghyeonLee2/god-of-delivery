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
                type: Sequelize.INTEGER(1),
                allowNull: false,
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            reviewPictureUrl:{
                type: Sequelize.TEXT,
                allowNull: true,
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
            underscored: true,
            modelName: 'Review',
            tableName: 'reviews',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db){
        db.Review.belongsTo(db.Store,{foreignKey:'storeId', targetKey:'storeId'})
        db.Review.belongsTo(db.User,{foreignKey:'userId', targetKey:'userId'})
        db.Review.belongsTo(db.Menu,{foreignKey:'menuId', targetKey:'menuId'})
        db.Review.hasOne(db.CeoReview, {foreignKey: 'reviewId', sourceKey:'reviewId'})
    }
}

module.exports = Review;