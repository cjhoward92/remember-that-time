const gulp = require('gulp');
const del = require('del');
const { OUT_DIR } = require('./gulpconstants');

gulp.task('clean', () => {
  return del(OUT_DIR);
});