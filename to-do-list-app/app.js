const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

//setting path for views/templates dir.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//seting path for public dir
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

//setting up express.Routes
const to_doRoutes = require('./routes/to-do-routes');
app.use('/toDo', to_doRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
});
