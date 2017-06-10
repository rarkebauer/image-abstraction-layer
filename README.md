This is a project from Free Code Camp's backend certification

This is a full stack javascript application that allows users to search for images and browse recent search queries. The search will return page titles, image links, and descriptive snippets. The user can paginate through the responses by adding a ?offset=2 parameter to the URL.

On your local system:
search: http://localhost:3000/api/imagesearch/YOUR SEARCH TERM
history: http://localhost:3000/api/latest/imagesearch/

On Heroku:
https://fast-shore-43365.herokuapp.com/api/imagesearch/YOUR SEARCH TERM
https://fast-shore-43365.herokuapp.com/api/latest/imagesearch/

In order to make the application work, you must create a file named 'constants.js' and include the following code:
var apiKey = XXX;	
var cx = XXX;

exports.cx = cx;
exports.apiKey = apiKey;

The XXX should be replaced with your unique apiKey and cx which can be generated on google's custom-search API website.


