// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

// Lint Tasks
gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  gulp.src('test/**/*.js')
    .pipe(mocha({
      reporter: 'nyan'
    }));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('public/js/*.js', ['lint']);
  gulp.watch(['src/*.js', 'test/**/*.js'], ['lint', 'test']);
});

// Default Task
gulp.task('default', ['lint', 'test', 'watch']);
