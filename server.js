var express = require('express');
var app = express();

var fs = require('fs');

app.get('/', function (req, res) {
    res.send('Hello world');
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});
app.use(bodyParser.json()); 

app.getNote('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello GET!');
});

fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});

app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});

fs.writeFile('./test.json', stringifyFile, function(err) {
    If (err) throw err;
    console.log('file updated');
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});