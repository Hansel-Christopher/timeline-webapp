const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
var pgp = require('pg')(/*options*/)
var conString = pgp('postgres://harysahvkammdn:a7dc71f97a7f9851700835c167d356c8096f44904e5909636174f0dc1d13a576@ec2-54-243-241-62.compute-1.amazonaws.com:5432/desh872b3drhd3')

const {getHomePage} = require('./routes/index');
const {addEventPage, addEvent, addMEvent, addMEventPage, viewPage} = require('./routes/event');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// connect to database
var db = new pg.Client(conString);
db.connect();
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.get('/', getHomePage);
app.get('/add', addEventPage);
app.get('/addm', addMEventPage);
app.get('/view', viewPage);
app.post('/add', addEvent);
app.post('/addm', addMEvent);
app.get('/view', viewPage);
// */

//Folder to host static css and js files
app.use('/static', express.static('static'))

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
