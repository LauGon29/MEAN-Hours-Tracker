var express = require('express');
var router = express.Router();
var Tracker = require('./models/trackerInfo/trackerInfo.controller');
var User = require('./models/users/user.controller');
var Clients = require('./models/clients/clients.model.controller');

// Routes request clients
router.get('/clients/all', Clients.getAll);
router.post('/client', Clients.create);
router.post('/client/update', Clients.update);
router.post('/client/updateDelete', Clients.updateDelete);

// Routes request trckerInfo
router.get('/api/all', Tracker.getAll);
router.post('/api', Tracker.create);
router.delete('/api/delete/:tracker_id', Tracker.delete);

// Routes request user
router.get('/users', User.getAll);
router.post('/login', User.login);
router.post('/user', User.create);
router.post('/user/update', User.update);


module.exports = router;
