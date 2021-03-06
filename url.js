var constants = require('./constants.js');
//for heroku version get rid of constants.js line and uncomment out the key and cx lines and comment out constants.apiKey
var key = constants.apiKey || process.env.KEY;
//var key = process.env.KEY;
var cx = constants.cx || process.env.CX;
//var cx = process.env.CX;

module.exports = {
	handler: function(response) {
		var item = [];
		for(var i=0; i<response.items.length; i++){
		item.push({title: response.items[i].title, link: response.items[i].link, snippet: response.items[i].snippet});
		}
		return item;
	},
	createUrl: function(param) {
		return 'https://www.googleapis.com/customsearch/v1?key=' + key + '&cx=' + cx + '&q=' + param;
	},

	recordHistory: function(title) {
		var date = new Date();
		
		return {term: title, when: date};
	}
	
}