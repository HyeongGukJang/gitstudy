const express = require('express');
const app = express();
const static = require('serve-static');

app.use('/public', static(__dirname+'/public'));

app.get('/', function(req, res) {
    
});

app.listen(3000, function() {
    console.log('127.0.0.1.3000');
});