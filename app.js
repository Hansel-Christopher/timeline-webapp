const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {addEventPage, addEvent, addMEvent, addMEventPage, viewPage} = require('./routes/event');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'hansel23',
    database: 'timeline-database-1'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
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
