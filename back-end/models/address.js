const Sequelize = require("sequelize");

class Address extends Sequelize.Model {
    static initate(sequelize) {
        Address.init({
            addressId:{
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey: true,
                autoIncrement:true
            },
            address:{
                type: Sequelize.STRING,
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
            },
            betterAddress:{
                type: Sequelize.STRING,
                allowNull: false,
            },
            category:{
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue:'우리집'
            },
            content:{
                type: Sequelize.STRING,
                allowNull: true,
            },
            toRider:{
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue:'문 앞에 두고 벨 눌러주세요'
            }
        },{
            sequelize,
            timestamps: false,
            underscored:true,
            modelName: "Address",
            tableName: 'address',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
    static associate(db) {
        db.Address.belongsTo(db.User, {foreignKey:'userId', targetKey:'userId'})
    }
}

module.exports = Address;