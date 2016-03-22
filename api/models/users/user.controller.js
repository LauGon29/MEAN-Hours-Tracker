var User = require('./user');
var deepPopulate = require('mongoose-deep-populate')

// Get list of users
module.exports.getAll = function(req, res) {
  User.find(function (err, info) {
    if(err) 
      res.send(err)
    res.json(info);
  });
};

// Creates a new user
module.exports.create = function(req, res) {
  User.create(req.body, function(err, info) {
    console.log(req.body.name);
    User.find(function(err, info) {
      if(err)
        res.send(err)
      res.json(info);
    });
  });
};

// Updates user's clients
module.exports.update = function(req, res) {
  User.findOne({_id: req.body.idUser}, function(err, user){
    if(user === null) {
      res.status(500).send('Looser');
    } else {
      user.clients.push(req.body.idClient)
      user.save();
      res.send('OK');
    }
  })
}


// Log in a user and populate
module.exports.login = function(req, res) {
  User.findOne({email: req.body.email}) 
    .populate({
      path: 'clients',
      populate: {
        path: 'works',
        model: 'Tracker'
      }
    })
    .exec(function(err, user) {
    if(user === null) {
      var error = "User not found"
      console.log(error);
      res.send(err)
    } else {
      user.comparePassword(req.body.password, function(err, isMatch){
        if(err) {
          console.log("Password incorrect");
          res.status(500).send("Password incorrect");
        };
        if (isMatch) {
          res.json(user);
        }
      })
    }
  });
};


// module.exports.login = function(req, res) {
//   User.findOne({email: req.body.email}) 
//     .populate('clients')
//     .exec(function(err, user) {

//       var options = {
//         path: 'clients.works',
//         model: 'Tracker'
//       }

//     if(user === null) {
//       var error = "User not found"
//       console.log(error);
//       res.send(err)
//     } else {
//       user.comparePassword(req.body.password, function(err, isMatch){
//         if(err) {
//           console.log("Password incorrect");
//           res.status(500).send("Password incorrect");
//         };
//         if (isMatch) {
//           User.populate(user, options, function(err, user){
//             res.json(user);
//           })
//         }
//       })
//     }
//   });
// };





