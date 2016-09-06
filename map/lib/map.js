/**
 * Created by Daniel Castañeda on 05/09/2016.
 */
'use strict';

var Map = function(){

    console.log('Created a new Map');
};

Map.prototype.sayHi = function(){
    console.log('Hello Map');
};

module.exports = Map;