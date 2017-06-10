const request = require('supertest');
const express = require('express');
var chai = require('chai');
var expect = chai.expect;
var server = request.agent("http://localhost:3000") //super useful to avoid EADRRINUSE error
var url = require('./url.js')


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



