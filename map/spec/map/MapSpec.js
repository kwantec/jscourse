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


    it("put should set values and increment the size while get should retrieve values", function() {

        expect( myMap.put ).toBeDefined();
        expect( myMap.get ).toBeDefined();

        var testValues = [
            {
                key:'uno',
                value:'Juan'
            },
            {
                key:'dos',
                value:'Maria'
            },
            {
                key:'tres',
                value:{
                    id:'001',
                    nombre: 'Algun Objeto'
                }
            }
        ];

        var i;
        for(i = 0;i < testValues.length;i++)
        {
            myMap.put( testValues[i].key,  testValues[i].value );
        }

        expect( myMap.size() ).toEqual(  testValues.length );

        for(i = 0;i < testValues.length;i++)
        {
            expect( myMap.get( testValues[i].key ) ).toEqual( testValues[i].value ) ;
        }
    });

});
