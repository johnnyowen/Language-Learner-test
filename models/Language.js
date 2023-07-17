const { DataTypes, Model } = require('sequelize'); 
const sequelize = require('../config/connection') // will need to import the config database here

class Language extends Model {}

Language.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
    }},{
    sequelize,
    freezeTableName: true, 
    modelName: "language"
    }
    // add language related fields right here as needed for the 3 languages
);

module.exports = Language;