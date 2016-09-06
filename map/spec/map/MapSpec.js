/**
 * Created by Daniel Castañeda on 05/09/2016.
 */
'use strict';

describe("Map", function() {
    var Map = require('../../lib/map');
    var myMap;

    beforeAll(function() {
       console.log('Running Map tests');
    });
    beforeEach(function() {
        myMap = new Map();
    });

    it("should say hi", function() {
        myMap.sayHi();
    });

    it("initial size should be zero", function() {

        expect( myMap.size ).toBeDefined();
        expect( myMap.size() ).toEqual(0);

    });


});
