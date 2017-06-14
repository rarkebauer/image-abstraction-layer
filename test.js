const request = require('supertest');
const express = require('express');
var chai = require('chai');
var expect = chai.expect;
var server = request.agent("http://localhost:3000"); //super useful to avoid EADRRINUSE error
var url = require('./url.js');
var index = require('./index.js');


const app = express();


describe('GET /', function() {
	it('respond with text', function(done) {
		server
		  .get('/')
		  .expect(200)
		  .end(function(err, res) {  //.expect() functions that fail will not throw instead they will return the assertion as an error to the .end() callback
		  	if(err) return done(err);
		  	expect(res.text).to.equal('Welcome to Rachel\'s custom image search') 
		  	done();
		  });
	});
});

describe('record history', function() {
	it('should return an object', function() {
		var myCat = url.recordHistory('cat');
		expect(myCat).to.be.an('object');
	});
});

describe('create url', function() {
	it('should return a string', function() {
		var queryUrl = url.createUrl('oj');
		expect(queryUrl).to.be.a('string');
	})
})

describe('GET /api/imagesearch/*', function() {
	it('respond with array', function(done) {
		server
		  .get('/api/imagesearch/purple')
		  .expect(200)
		  .set('Accept', 'application/json')
		  .end(function(err, res) {  
		  	if(err) return done(err);
		  	done();
		  });
	});
});

describe('GET /route', function() {
	it('respond with array', function(done) {
		server
		  .get('/api/latest/imagesearch/')
		  .expect(200)
		  .set('Accept', 'application/json')
		  .end(function(err, res) {  
		  	done();
		  });
	});
});
