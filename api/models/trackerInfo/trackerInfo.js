var mongoose = require('mongoose');

var TrackingHours = new mongoose.Schema({
  title: String,
  day: String,
  startTime: {type:Date, required:true},
  endTime: {type:Date, required:true},
  hours: Number,
  description: String
});

module.exports = mongoose.model('Tracker', TrackingHours);
