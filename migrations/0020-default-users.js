require('../app/models/user');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/charts-dev');

var User = mongoose.model('User');

exports.up = function(db, next){
	var user = new User({ email: "admin@user.com",
						username: "admin",
						password: "password"});
	console.log(user);
	user.save(function(err) {
		if(err) console.log(err);
		next();
	});
};

exports.down = function(db, next){
    next();
};