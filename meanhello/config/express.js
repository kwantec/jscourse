/**
 * Created by Daniel Castañeda on 15/09/2016.
 */
'use strict';

var express = require('express');

module.exports = function(){
    var app = express();
    require('../app/routes/index.server.routes.js')(app);
    return app;
};