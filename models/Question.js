const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}
 Question.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lessonId: {
    type: DataTypes.INTEGER,
    references: {
      model: "lesson",
      key: "id"
    }}},{
  sequelize,
  freezeTableName: true, 
  modelName: "question"
  // Add question related fields here once we know what we will ask.
});

module.exports = Question;