const path = require('path');
const express = require('express');
const fs = require('fs');
const session = require('express-session');
const routes = require('./controllers');
const signupRoutes = require('./controllers/api/signupRoutes');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sess = {
  secret: 'Super secret secret',
  cookie: {    
  maxAge: 300000, // 5 minutes = 300000
  httpOnly: true,
  secure: false,
  sameSite: 'strict',
},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use('/signup', signupRoutes);

app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  const userData = { email, password };
  fs.appendFile('userData.json', JSON.stringify(userData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to store user data' });
    } else {
      res.status(200).json({ message: 'User data stored successfully' });
    }
  });
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});