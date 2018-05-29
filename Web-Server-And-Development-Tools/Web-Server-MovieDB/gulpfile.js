/**
 * Created by George-Lenovo on 5/29/2018.
 */

const webConstants = require('./webConstants');
const gulp = require(webConstants.GULP);
const minifyHtml = require(webConstants.HTML_MIN_GULP);

//minify html via removing whitespaces and commented code
// console.log(__dirname + '/gulpfile.js');

gulp.task(webConstants.DEFAULT_STR, [webConstants.MINIFY_HTML_GULP]);

gulp.task(webConstants.MINIFY_HTML_GULP, () => {
    gulp.src(webConstants.VIEWS_DIR_GULP)
        .pipe(minifyHtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(webConstants.MINIFIED_DIR_GULP));
});
