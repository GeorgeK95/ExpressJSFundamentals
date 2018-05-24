/**
 * Created by George-Lenovo on 5/25/2018.
 */

const gulp = require('gulp');
const minifyCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('minify-css', () => {
    gulp.src('content/style/*.css')
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('content/style'));
});