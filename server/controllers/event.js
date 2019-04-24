var mongoose = require('mongoose');
var Event = require('../models/event');

exports.createEvent = function(req,res){
    var event = new Event({
        start_date: req.body.start_date,
        text: req.body.text,
    });
    return event
    .save()
    .then((newEvent) => {
      return res.status(201).json({
        success: true,
        message: 'New event created successfully',
        events: newEvent,
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
    Event.find()
        .select('_id start_date text')
        .then((allEvent) => {
            return res.status(200).json({
            success : true,
            message : 'list of all events',
            event: allEvent,
        });
    })
    .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
};
