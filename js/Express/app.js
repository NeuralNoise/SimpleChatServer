var express = require('express');
var app = express();
var counterAdmin = 0;
var counterUser = 0;


app.get('/admin', function (req, res) {
    res.send('Hello admin!\n admin: '+ counterAdmin++ + '\n user: ' + counterUser);
});

app.get('/user/:id', function (req, res) {
    res.send('Hello !' + req.params.id);
    counterUser++;
});

var server = app.listen(1338, function () {
    console.log('Example app listening at http://127.0.0.1:1338');
});