const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const todoRoutes = require('./routes/todo');
const loginRoutes = require('./routes/login');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//Route
app.use(loginRoutes);
app.use(todoRoutes);

app.listen(3000, () => {
  console.log("localhost://3000");
})
