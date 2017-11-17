/*
*
*			Barebones gulpfile.  Only has browserSync.  Make sure to change the directories!
*
*/


var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


//this uses the gulp-watch plugin - *****baseDir should point to where index.html lives!!!
gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

   

    watch('./app/*', function() {
        browserSync.reload();

    });

});



