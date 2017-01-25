'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

// =======================
// = Importing all tasks =
// =======================
requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', (cb) => runSequence(['clean:lib'], ['copy:materialize', 'copy:jslibs', 'copy:csslibs', 'copy:fontlibs'], cb));
