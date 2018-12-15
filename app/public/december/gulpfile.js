'use strict';
 
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path')

gulp.task('default', function() {
	return gulp.src('./scss/*.less')
	    .pipe(less({
	      paths: [ path.join(__dirname, 'less', 'includes') ]
	    }))
	    .pipe(gulp.dest('./css'));
});

 