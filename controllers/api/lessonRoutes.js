const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User, Lesson, Language} = require('../../models');

router.get('/', async (req, res) => {
    try {
       const language = await Language.findAll(req.body.languageId, {
        
       })
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

module.exports = router;