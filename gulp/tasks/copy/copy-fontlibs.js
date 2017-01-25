'use strict';

const gulp = require('gulp');
const config = require('../../config');

gulp.task('copy:fontlibs', () => gulp.src(config.fontLibs).pipe(gulp.dest(`${config.srcFolder}lib/fonts`)));
