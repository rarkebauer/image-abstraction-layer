//var constants = require('./constants.js');
//var key = constants.apiKey || 
var key = process.env[KEY];
//var cx = constants.cx || 
var cx = process.env[CX];

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