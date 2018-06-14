/**
 * Created by George-Lenovo on 6/3/2018.
 */

const webConstants = require('../webConstants');

const express = require(webConstants.EXPRESS_STR);
const path = require(webConstants.PATH_STR);
const bodyParser = require(webConstants.BODY_PARSER_STR);

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = (app, config) => {
    app.set(webConstants.VIEW_ENGINE_STR, webConstants.PUG_STR);
    app.set(webConstants.VIEWS_STR, path.join(config.rootPath, webConstants.VIEW_STR));

    app.use(bodyParser.urlencoded({extended: true}));

    app.use(cookieParser());
    app.use(session({secret: 'secret', saveUninitialized: false, resave: false}));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        if (req.user) {
            res.locals.user = req.user;
        }

        next();
    })

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