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
const passportSetup = require("./server/config/passport");
const cookieSession = require('cookie-session');

app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',mainroutes);
app.use("/auth", userroutes);

app.use(logger('dev'));

app.use(cookieSession({
  maxAge : 24 * 60 * 60 * 100,
  keys : ["random"]
}))

const db = require("./server/config/config").mongoURI;

mongoose.connect(db,  {useNewUrlParser: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log(error);
  });


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`tranquili-peak server is running on port 8080`);
});