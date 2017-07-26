const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mustache = require('express-mustache');
const expressValidator = require('express-validator');
const todoRoutes = require('./todo');
const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

//Route
app.use(todoRoutes);

app.listen(3000, () => {
  console.log("WORKING");
})
