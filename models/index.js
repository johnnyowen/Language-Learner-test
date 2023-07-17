// Import all of the models needed from the models folder
const Language = require('./Language');
const Lesson = require('./Lesson');
const Question = require('./Question'); //will import the question.js when I can get it to connect
const User = require('./User');
// const Review = require('./Review');

// Define associations between models
Language.hasMany(User, { foreignKey: 'languageId' });
User.belongsTo(Language, { foreignKey: 'languageId', onDelete: "CASCADE" });
Language.hasMany(Lesson, { foreignKey: 'languageId' });
Lesson.belongsTo(Language, { foreignKey: 'languageId', onDelete: "CASCADE" });
Lesson.hasMany(Question, { foreignKey: 'lessonId' });
Question.belongsTo(Lesson, { foreignKey: 'lessonId' });

// Export models
module.exports = { Language, User, Lesson, Question };