/**
 * Created by Daniel Castañeda on 05/09/2016.
 */
'use strict';

var Map = function(){

    this.storage = {};
};

Map.prototype.sayHi = function(){
    console.log('Hello Map');
};

Map.prototype.size = function(){

    return Object.keys( this.storage ).length;
};

Map.prototype.put = function(key, value){
    this.storage[ key ] = value;
};

Map.prototype.get = function(key){
    var tmp = Object.getOwnPropertyDescriptor(this.storage, key);

    if (undefined === tmp) {
        return undefined;
    }

    return tmp.value;
};

module.exports = Map;