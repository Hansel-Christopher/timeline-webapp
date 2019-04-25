var mongoose = require('mongoose');
var eventModel = require('../models/event');

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

exports.selectEvent = function (req,res){
  event = eventModel.find().exec()
        // .select('_id start_date text').then( (allEvent) => {
        //   return res.status(200).json({
        //     success: true,
        //     message: 'A list of all events',
        //     event: allEvent,
        //   });
      // })
    
    .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
      return event;
  // var cursor = eventModel.collection('events').find().toArray(function(err, results) {
  //   console.log(results)
  //   // send HTML file populated with quotes here
  // })
  
    };