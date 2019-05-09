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

