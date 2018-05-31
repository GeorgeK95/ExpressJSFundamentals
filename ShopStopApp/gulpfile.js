/**
 * Created by George-Lenovo on 5/25/2018.
 */
const webConstants = require('./webConstants');
const gulp = require(webConstants.GULP);
const minifyCss = require(webConstants.CLEAN_CSS_GULP);
const rename = require(webConstants.RENAME_GULP);

gulp.task(webConstants.MINIFY_CSS_GULP, () => {
    gulp.src(webConstants.CSS_FILES_DIR_GULP)
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(webConstants.CSS_DIR_GULP));
});
