const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('signup'); // Render the signup template
});

router.post('/', (req, res) => {
  res.redirect('/'); // Redirect to the homepage or a success page
  
});

module.exports = router;
