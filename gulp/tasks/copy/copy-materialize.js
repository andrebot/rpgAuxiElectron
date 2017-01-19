'use strict';

const gulp = require('gulp');
const config = require('../../config');

gulp.task('copy:materialize', () => gulp.src([config.materializecss]).pipe(gulp.dest(`${config.srcFolder}lib/`)));
