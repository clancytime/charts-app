exports.render = function(req, res) {
	 if (req.isAuthenticated()) {
		res.render('index', { title: 'Home' });
	}
	else {
		res.redirect('/signin');
	}
};