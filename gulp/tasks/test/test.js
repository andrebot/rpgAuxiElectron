'use strict';

const mocha = require('gulp-mocha');
const gulp = require('gulp');
const config = require('../../config');

gulp.task('test', function test() {
  return gulp.src(config.testFiles)
          .pipe(mocha());
});
