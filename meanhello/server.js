/**
 * Created by Daniel Castañeda on 15/09/2016.
 */
'use strict';

var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('MEAN Express server running at http://localhost:3000');