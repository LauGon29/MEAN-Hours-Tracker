var Tracker = require('./trackerInfo');
var _ = require('lodash');

// Get list of entries
module.exports.getAll = function(req, res) {
  Tracker.find(function (err, info) {
    if(err) 
      res.send(err)
    res.json(info);
  });
};

// Creates a new entry
module.exports.create = function(req, res) {
      console.log(req.body)
  Tracker.create(req.body, function(err, info) {
      if(err)
        res.send(err)
      res.json(info);
  });
}

// Deletes an entry
module.exports.delete = function(req, res) {
  Tracker.remove({_id: req.params.tracker_id}, function(err, info) {
    if(err)
      res.send(err)
    res.json(info)
  })
}
