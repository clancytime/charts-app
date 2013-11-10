module.exports = function(app, passport) {
	//User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signout', users.signout);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);

	var index = require('../app/controllers/index');
	app.get('/', index.render);
};