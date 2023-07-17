const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = require('./userData.json');

const seedData = async () => {
    await sequelize.sync({force: true})

    await User.bulkCreate(userData, {individualHooks: true});
    console.log('All seeded!');

    process.exit(0);
};

seedData();