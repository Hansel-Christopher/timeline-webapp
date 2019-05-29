var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var mainroutes = require('./server/routes/main');
var userroutes = require('./server/routes/user');
const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const port  = 8080;
const passport = require("passport");


app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mainroutes);
app.use("/api/users", userroutes);

app.use(logger('dev'));
app.use(passport.initialize());
require("./server/config/passport")(passport);

const db = require("./server/config/config").mongoURI;

mongoose.connect(db,  {useNewUrlParser: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`tranquili-peak server is running on port 8080`);
});