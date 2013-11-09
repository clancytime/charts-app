var express = require('express'),
	helpers = require('view-helpers'),
	config = require('./config');

module.exports = function(app) {
	app.set('showStackError', true);

	app.locals.pretty = true;

	app.use(express.compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));

	app.use(express.static(config.root + '/public'));

	if (process.env.NODE_ENV !== 'test') {
		app.use(express.logger('dev'));
	}

	app.set('views', config.root + '/app/views');
	app.set('view engine', 'jade');

	app.enable("jsonp callback");

	app.configure(function() {
        //cookieParser should be above session
        app.use(express.cookieParser());

        //bodyParser should be above methodOverride
        app.use(express.bodyParser());
        app.use(express.methodOverride());

        //dynamic helpers
        app.use(helpers(config.app.name));

        //routes should be at the last
        app.use(app.router);

        //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
        app.use(function(err, req, res, next) {
            //Treat as 404
            if (~err.message.indexOf('not found')) return next();

            //Log it
            console.error(err.stack);

            //Error page
            res.status(500).render('500', {
                error: err.stack
            });
        });

        //Assume 404 since no middleware responded
        app.use(function(req, res, next) {
            res.status(404).render('404', {
                url: req.originalUrl,
                error: 'Not found'
            });
        });

    });
};