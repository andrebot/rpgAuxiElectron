'use strict';

const gulp = require('gulp');
const config = require('../../config');

gulp.task('copy:csslibs', () => gulp.src(config.cssLibs).pipe(gulp.dest(`${config.srcFolder}lib/css`)));
