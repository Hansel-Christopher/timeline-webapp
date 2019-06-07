var express = require('express');
var router = express.Router();
var controller = require('../controllers/event.js');
var createEvent = controller.createEvent;
var selectEvent = controller.selectEvent;
var path = require('path');

var MongoClient = require('mongodb').MongoClient;

const mongoose = require("mongoose");
var url = require("../config/config").mongoURI;

const User = require("../models/user");
const Event = require("../models/event");

router.route('/add').post(function (req, res) {
    const event = new Event(req.body);
    event.save()
      .then(event => {
          res.json('Event added successfully');
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  
router.get('/view', function (req,res){
    MongoClient.connect(url, { useNewUrlParser: true }  ,function(err, db) {
      if (err) throw err;
      var dbo = db.db("chronosdb");
      dbo.collection("events").find({}, { projection: { _id: 0, start_date : 1, text: 1, headline: 1, url: 1}}).toArray(function(err, result) {
      if (err) throw err;
      res.render(path.join(__dirname,'../public/display.ejs'),{event:result});
    });
   }); 
});
router.post('/add',createEvent);

module.exports = router;
