/**
 * Created by George-Lenovo on 5/27/2018.
 */

const webConstants = require('../webConstants');
const baseHandler = require('./base');

const url = require(webConstants.URL_MODULE);
const fs = require(webConstants.FS_MODULE);
const path = require(webConstants.PATH_MODULE);
const qs = require(webConstants.QUERY_STRING_MODULE);
const db = require(webConstants.DB_MODULE);

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname.endsWith(webConstants.ADD_MOVIE_URL) && req.method == webConstants.HTTP_GET) {
        let __parentDirname = __dirname + webConstants.PREVIOUS_EXT;

        let filePath = path.normalize(path.join(__parentDirname, `${req.pathname}`));
        filePath = filePath.replace(webConstants.ADD_MOVIE_STR, webConstants.EMTPY_STR);
        filePath += webConstants.ADD_MOVIE_HTML_PATH;

        fs.readFile(filePath, (err, data) => {
            if (err) {
                baseHandler.handleNotFound(req, res);
                return;
            }

            baseHandler.handleOk(req, res, data);
        });
    } else if (req.pathname.endsWith(webConstants.ADD_MOVIE_URL) && req.method == webConstants.HTTP_POST) {
        let body = '';

        req.on(webConstants.EVENT_TYPE_DATA, function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on(webConstants.EVENT_TYPE_END, function () {
            //If the name or the URL are null or empty => return friendly message

            let __parentDirname = __dirname + webConstants.PREVIOUS_EXT;
            let filePath = path.normalize(path.join(__parentDirname, `${req.pathname}`));
            filePath = filePath.replace(webConstants.ADD_MOVIE_STR, webConstants.EMTPY_STR);
            filePath += webConstants.ADD_MOVIE_HTML_PATH;

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    baseHandler.handleNotFound(req, res);
                    return;
                }

                let post = qs.parse(body);
                let title = post.movieTitle;
                let url = post.moviePoster;

                if (!title || title == webConstants.EMTPY_STR || !url || url == webConstants.EMTPY_STR) {
                    data = data.toString().replace(webConstants.REPLACE_ME_TEMPLATE, webConstants.FAILED_TO_ADD_MOVIE_TEMPLATE);
                    baseHandler.handleBadRequest(req, res, data);
                    return;
                }

                data = data.toString()
                    .replace(webConstants.REPLACE_ME_TEMPLATE, webConstants.SUCCESSFULLY_ADDED_MOVIE_TEMPLATE);

                let filePath = __dirname.concat('/../config/database.js');

                db.push(post);

                // TODO: write to file

                baseHandler.handleCreate(req, res, data);
            });
        });
    } else {
        return true;
    }
};