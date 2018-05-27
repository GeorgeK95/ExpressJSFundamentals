/**
 * Created by George-Lenovo on 5/27/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require('./base');

const url = require(webConstants.URL_MODULE);
const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);
const db = require(webConstants.DB_MODULE);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname.startsWith(webConstants.DETAILS_URL) && req.method == webConstants.HTTP_GET) {
        let __parentDirname = __dirname + webConstants.PREVIOUS_EXT;
        let pathname = req.pathname;
        let movieIndex = pathname.substr(pathname.lastIndexOf('/') + 1, pathname.length - 1);

        if (movieIndex < 0 || movieIndex >= db.length) {
            baseHandler.handleNotFound(req, res);
            return;
        }

        let targetMovie = db[movieIndex];

        let replacement = webConstants.MOVIE_DETAILS_TEMPLATE;
        replacement = replacement.replace(webConstants.MOVIE_POSTER_STR, `${targetMovie.moviePoster}`);
        replacement = replacement.replace(webConstants.MOVIE_TITLE_STR, `${targetMovie.movieTitle}`);
        replacement = replacement.replace(webConstants.MOVIE_YEAR, `${targetMovie.movieYear}`);
        replacement = replacement.replace(webConstants.MOVIE_DESCRIPTION_STR, `${targetMovie.movieDescription}`);

        console.log(replacement);

        /*for (let movie of db) {
         let replacement = webConstants.MOVIE_DETAILS_TEMPLATE;
         let toReplace = webConstants.REPLACE_ME_TEMPLATE;

         replacement = replacement.replace(webConstants.MOVIE_POSTER_STR, `${movie.moviePoster}`);
         replacement = replacement.replace(webConstants.MOVIE_TITLE_STR, `${movie.movieTitle}`);
         replacement = replacement.replace(webConstants.MOVIE_YEAR, `${movie.movieYear}`);
         replacement = replacement.replace(webConstants.MOVIE_DESCRIPTION_STR, `${movie.movieDescription}`);

         moviesHtml += replacement;
         }*/

        __parentDirname += webConstants.MOVIE_DETAILS_HTML_PATH;

        fs.readFile(__parentDirname, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            data = data.toString().replace(webConstants.REPLACE_ME_TEMPLATE, replacement);

            baseHandler.handleOk(req, res, data);
        });
    } else {
        return true;
    }
};