'use strict';

const gulp = require('gulp');
const config = require('../../config');

gulp.task('copy:hammer', () => gulp.src(config.hammer).pipe(gulp.dest(`${config.srcFolder}lib/js`)));
