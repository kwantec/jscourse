/**
 * Created by Daniel Castañeda on 06/09/2016.
 */
'use strict';

var gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('default', function() {
    // place code for your default task here
    console.log('Hello Gulp');
});

gulp.task('test', function() {
    gulp.src('spec/map/MapSpec.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine());
});