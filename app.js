

var express = require('express');
var apiMocker = require('connect-api-mocker');

var app = express();

app.use('/', apiMocker('mocks/api'));

module.exports = app;
