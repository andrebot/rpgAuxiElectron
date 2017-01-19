'use strict';

const config = require('../../config');
const gulp = require('gulp');
const del = require('del');

gulp.task('clean:lib', () => del([`${config.srcFolder}lib/**/*`, `${config.srcFolder}lib/`]));
