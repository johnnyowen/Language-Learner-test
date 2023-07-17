const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Question } = require('../../models');

router.get('/french', async (req, res) => {
    try {
    res.render('')
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/spanish', async (req, res) => {
    try {
    res.render('')
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.get('/japanese', async (req, res) => {
    try {
    res.render('japanese')
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;