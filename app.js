var port = parseInt(8080);
var express = require('express');
var app = express.createServer();

var ctrl = require('./controller'); // Controllers

// Mid-ware Parsers
app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jshtml');
    app.use(express.bodyParser());
    app.use('/pub',express.static(__dirname + '/public'));
    ctrl.post.set('views',app.settings.views);
});

// Error Handler
app.configure('development', function() { app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); });
app.configure('production', function() { app.use(express.errorHandler()) });


// Default Route
app.get('/favicon.ico', function(req,res) { res.send(404); });

app.all('/:control?/:action?/:id?',
	// Skip /pub/* - These are for statics
	function (req,res,next) { if(req.params.control == 'pub') next('route'); else next(); },

	// Set default controller to {home}
	function (req,res,next) { if(!req.params.control) req.params.control = 'home'; next(); },

	// Set default action to {index}
	function (req,res,next) { if(!req.params.action) req.params.action = 'index'; next(); },

	// Attempt to invoke method for the requested controler/action.
	function (req,res) {
	    var c = req.params.control.toLowerCase();
	    var a = req.params.action.toLowerCase();
	    var m = req.method;
	    try { ctrl[c][a][m](req,res); }
	    catch (e) { res.send(404) }
	});

app.listen(port);
console.log('** Web-100 running at http://localhost:' + port);

