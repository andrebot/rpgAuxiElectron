'use strict';

const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const gulp = require('gulp');
const config = require('../../config');

gulp.task('test', function test() {
  return gulp.src(config.testFiles)
          .pipe(mocha());
});

gulp.task('pre-test', function () {
  return gulp.src(['src/**/*.js', '!src/lib/**/*', '!src/index.js'])
          .pipe(istanbul())
          .pipe(istanbul.hookRequire());
});

gulp.task('test:coverage', ['pre-test'], function () {
  return gulp.src(['test/**/*.spec.js'])
          .pipe(mocha())
          .pipe(istanbul.writeReports())
          .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});
