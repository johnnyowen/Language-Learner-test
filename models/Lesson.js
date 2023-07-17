const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
//const db = require(''); //will need to be sure to add config database here or utils

class Lesson extends Model {}
Lesson.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  languageId: {
    type: DataTypes.INTEGER,
    references: {
      model: "language",
      key: "id"
    }
  }}, {
  sequelize, 
  freezeTableName: true,
  modelName: "lesson"
  // add lessons
});

module.exports = Lesson;