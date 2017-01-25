'use strict';

const gulp = require('gulp');
const config = require('../../config');

gulp.task('copy:jslibs', () => gulp.src(config.jsLibs).pipe(gulp.dest(`${config.srcFolder}lib/js`)));
