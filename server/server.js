var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var jwt = require('jsonwebtoken')

var database = require('../config/database');
var routes = require('../api/routes.js');

var port = 5000;

var app = express();

mongoose.connect(database.url);
app.set('superSecret', database.secret); // secret variable

app.use(morgan('dev'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',routes);

app.listen(port, function(){
	console.log('Listen port: '+port);
});