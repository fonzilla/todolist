const express = require('express');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash-messages');
const mustacheExpress = require('mustache-express');
const todoRoutes = require('./routes/todo');
const loginRoutes = require('./routes/login');
const models = require('./models');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

passport.use(new LocalStrategy(
  function(username, password, done){
    models.user.find({
      where: {
        username: username
      }
    })
    .then(result => {
      if(result.id && result.auth(password)){
        return done(null, result, { message: 'Success!' })
      } else if(result.id) {
        console.log("FAIL-------------------------");
        return done(null, false, { message: 'username or password incorrect' })
      }
    })
    .catch(err => {
      return done(err);
    })
  }
))

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  models.user.findById(id)
  .then(result => {
    done(null, result);
  })
});

app.use(session({
    secret: 'smellycat',
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Route
app.use(loginRoutes);
app.use(todoRoutes);

app.listen(3000, () => {
  console.log("localhost://3000");
})
