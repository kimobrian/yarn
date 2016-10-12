var http = require('http')
var express = require('express')
var app = express()

app.get('/', function(res, req){
	res.end('First Yarn App')
})

http.create_server(7000, function(){
	console.log('Running on port *7000')
})