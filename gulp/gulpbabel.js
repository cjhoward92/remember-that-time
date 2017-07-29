const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const { OUT_DIR } = require('./gulpconstants');
 
gulp.task('babel', ['js', 'jsx']);

gulp.task('js', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())  
    .pipe(babel({
        presets: ['es2015', 'flow']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(OUT_DIR));
});

gulp.task('jsx', () => {
  return gulp.src('src/**/*.jsx')
    .pipe(sourcemaps.init())  
    .pipe(babel({
        presets: ['react', 'flow'],
        plugins: ['transform-react-jsx']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(OUT_DIR));
});