var express = require('express'),
	fs = require('fs');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config');


var app = express();

require('./config/express')(app);

require('./config/routes')(app);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//expose app
exports = module.exports = app;