'use strict';

const gulp = require('gulp');
const config = require('../../config');

gulp.task('copy:jquery', () => gulp.src(config.jquery).pipe(gulp.dest(`${config.srcFolder}lib/js`)));
