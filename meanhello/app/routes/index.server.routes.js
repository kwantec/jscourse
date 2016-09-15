/**
 * Created by Daniel Castañeda on 15/09/2016.
 */
'use strict';

module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};