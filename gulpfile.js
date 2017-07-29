const gulp = require('gulp');
require('require-dir')('./gulp');

gulp.task('init', ['clean'])

gulp.task('default', gulp.series('init', 'babel'));