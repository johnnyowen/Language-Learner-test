const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}
Review.init({
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  review_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  }},{
  sequelize, 
  freezeTableName: true,
  modelName: "review"
  // add any other review information here if needed.
});

module.exports = Review;