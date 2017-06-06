var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var url = require('./url.js');

function urlRoute(req, res) {
	var search = req.params[0];
	console.log(req.params);
	res.json(req.params);
}

app.listen(port, function() {
	console.log('Example app listening on port ' + 3000);
})

app.get('/api/imagesearch/*', urlRoute);
app.get('/', function(req, res) {
	res.send('Welcome to the express server')
})

module.exports = app;
