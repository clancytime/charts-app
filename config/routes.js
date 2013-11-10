module.exports = function(app, passport) {
	//User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signout', users.signout);

	var index = require('../app/controllers/index');
	app.get('/', index.render);
};