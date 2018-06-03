/**
 * Created by George-Lenovo on 6/3/2018.
 */

const webConstants = require('../webConstants');

const express = require(webConstants.EXPRESS_STR);
const path = require(webConstants.PATH_STR);
const bodyParser = require(webConstants.BODY_PARSER_STR);

module.exports = (app, config) => {
    app.set(webConstants.VIEW_ENGINE_STR, webConstants.PUG_STR);
    app.set(webConstants.VIEWS_STR, path.join(config.rootPath, webConstants.VIEW_STR));

    app.use(bodyParser.urlencoded({extended: true}));

    app.use((req, res, next) => {
        if (req.url.startsWith(webConstants.SLASH_CONTENT)) {
            req.url = req.url.replace(webConstants.SLASH_CONTENT, webConstants.EMPTY_STR);
        }

        next();
    }, express.static(
        path.normalize(
            path.join(config.rootPath, webConstants.CONTENT)
        )
    ));
};