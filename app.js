// import dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var routes = require('./server/routes/main')
const app = express();

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(logger('dev'));
// set up mongoose
mongoose.connect('mongodb://localhost/timeline-db',  {useNewUrlParser: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });
// set up port
const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Timeline',
  });
});

app.use(express.static('public/css'));
app.listen(port, () => {
  console.log(`tranquili-peak server is running on port ${port}`);
});