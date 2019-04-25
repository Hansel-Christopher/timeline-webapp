var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var eventSchema = new mongoose.Schema({
        start_date: {
            type:  String,
        },
        text: {
            type: String,
        }
},{collection:'events'});

module.exports = mongoose.model('Event', eventSchema);