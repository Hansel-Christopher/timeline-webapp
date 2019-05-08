var mongoose = require('mongoose');
var eventModel = require('../models/event');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/timeline-db";
var event;

exports.createEvent = function(req,res){
    var event = new eventModel(req.body);
    return event.save()
    .then((newEvent) => {
      return res.status(201).json({
        success: true,
        message: 'New event created successfully',
        event: newEvent,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
};

exports.selectEvent = async function (req,res){
  MongoClient.connect(url, { useNewUrlParser: true }  ,function(err, db) {
    if (err) throw err;
    var dbo = db.db("timeline-db");
    dbo.collection("events").find({}, { projection: { _id: 0, start_date : 1, text: 1}}).toArray(function(err, result) {
    if (err) throw err;
    event =result;
    console.log(event);
  });
 });
 return event;
}
