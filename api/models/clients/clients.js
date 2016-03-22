var mongoose = require('mongoose');

var ClientsList = new mongoose.Schema({
  name: { type: String, required: true,  index: { unique: true }},
  email: { type: String, required: true,  index: { unique: true }},
  company: String,
  cost: Number,
  works: [{type: mongoose.Schema.ObjectId, ref: 'Tracker'}]
});

module.exports = mongoose.model('Client', ClientsList);
