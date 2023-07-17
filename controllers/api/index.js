const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
// router.use((req, res) => res.send('<h1>Oops! Wrong Route!</h1>'));

module.exports = router;