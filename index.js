var express = require('express');
var request = require('request');

var app = express();

var port = process.env.PORT || 3000;

var url = require('./url.js');
var constants = require('./constants.js');

var myUrl;
var history = [];
var term;

//create get route, create url, return url, request using returned url, send response to handler to be formatted, return formatted response

function urlRoute(req, res, callback) {
	myUrl = url.createUrl(req.params[0]);
	if(req.params[0]){
	  term = url.recordHistory(req.params[0]);
	  history.push(term);
	}
	console.log(history);
	callback(); //callback is queryApi or displayHistory depending on route
}

function queryApi(req, res){
 	var result = '';
 	var myBody = '';
   request(myUrl, function(error, responseData, body){
  	console.log('error: ', error);
  	console.log('statusCode: ', responseData && responseData.statusCode);
  	myBody = JSON.parse(body); 
  	result = url.handler(myBody);
  	res.send(result);
  })
}

function displayHistory(req, res){
	res.send(history);
}

app.listen(port, function() {
	console.log('Example app listening on port ' + 3000);
})

app.get('/api/imagesearch/*', urlRoute, queryApi); //invoke the callback queryApi in urlRoute function
app.get('/api/latest/imagesearch/', urlRoute, displayHistory) //invoke displayHistory in urlRoute function
app.get('/', function(req, res) {
	res.send('Welcome to Rachel\'s custom image search')
})

module.exports = app;
