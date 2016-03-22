var Client = require('./clients');
var _ = require('lodash');

// Get list of clients
module.exports.getAll = function(req, res) {
  Client.find(function (err, info) {
    if(err) 
      res.send(err)
    res.json(info);
  });
};

// Creates a new client
module.exports.create = function(req, res) {
  Client.create(req.body, function(err, client) {
      if(err)
        res.send(err)
      res.json(client);
  });
};

// Updates client's works
module.exports.update = function(req, res) {
  Client.findOne({_id: req.body.idClient}, function(err, client){
    if(client === null) {
      res.status(500).send('Looser');
    } else {
      client.works.push(req.body.idWork)
      client.save();
      res.send('OK');
    }
  })
}

// Updates client's works delete
module.exports.updateDelete = function(req, res) {
  console.log(req.body)
  Client.findOne({_id: req.body.idClient}, function(err, client){
    if(client === null) {
      res.status(500).send('Looser');
    } else {
      var works = client.works;
      works.splice(works.indexOf(req.body.idWork), 1);
      client.save();
      res.send(works);
    }
  })
}
