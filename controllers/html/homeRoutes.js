const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

router.get('/', withAuth, async (req, res) => {
  try {
    // Assuming you want to fetch all users for the homepage
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      order: ['name'],
    });

    res.render('homepage', {
      users,
      logged_in: req.session.loggedIn,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/french', withAuth, (req, res) => {
  res.render('french', { logged_in: req.session.loggedIn });
});

router.get('/spanish', withAuth, (req, res) => {
  res.render('spanish', { logged_in: req.session.loggedIn });
});

router.get('/japanese', withAuth, (req, res) => {
  res.render('japanese', { logged_in: req.session.loggedIn });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }

  res.render('signup');
});

module.exports = router;
