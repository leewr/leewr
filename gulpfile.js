'use strict'
var path = require('path')
var gulp = require('gulp')
var sass = require('gulp-sass')
var paths = {
  scss: {
    src: 'app/public/static/scss/*.scss',
    dest: 'app/public/static/css'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'assets/scripts/'
  }
}

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(['assets'])
}

gulp.task('scss', function() {
  console.log(path.resolve(paths.scss.src))
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.scss.dest))
})

gulp.task('dev', function() {
  console.log(path.resolve(paths.scss.src))
  gulp.watch(paths.scss.src, ['scss'])
})
