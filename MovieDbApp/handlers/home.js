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

    if (req.pathname.endsWith(webConstants.HOME_URL) && req.method == webConstants.HTTP_GET) {
        let __parentDirname = __dirname + webConstants.PREVIOUS_EXT;

        let filePath = path.normalize(path.join(__parentDirname, `${req.pathname}`));

        let moviesHtml = webConstants.EMTPY_STR;

        for (let movie of db) {
            moviesHtml += webConstants.MOVIE_POSTER_TEMPLATE.replace(webConstants.YOUR_MOVIE_POSTER_URL_STR, movie.moviePoster)
                .replace(webConstants.YEAR_STR, movie.movieYear);
        }

        filePath += webConstants.HOME_HTML_PATH;

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            data = data.toString().replace(webConstants.REPLACE_ME_TEMPLATE, moviesHtml);
            baseHandler.handleOk(req, res, data);
        });
    } else {
        return true;
    }
};