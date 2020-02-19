var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.render('index', {title: 'Guru99', message: 'Welcome'})
});

app.get('/About', function (req, res) {
    res.render('index_1', {title: 'About', message: 'About'})
});


app.get('/Contact', function (req, res) {
    res.render('index_2', {title: 'Contact', message: 'Contact'})
});

var server = app.listen(3000, function () {});






//app.get('/About', function (req, res) {
//    res.send('About us');
//});
//
//
//app.get('/Servies', function (req, res) {
//    res.send('Our Servies');
//});
//var server = app.listen(3000, function () {});