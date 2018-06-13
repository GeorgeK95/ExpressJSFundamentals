/**
 * Created by George-Lenovo on 5/24/2018.
 */
const webConstants = require('./webConstants');

const express = require(webConstants.EXPRESS_STR);

const http = require(webConstants.HTTP);
const handlers = require(webConstants.INDEX_HANDLER_PATH);

const env = process.env.NODE_ENV || webConstants.DEVELOPMENT_STR;
const config = require(webConstants.DB_CONFIG_PATH);
const db = require(webConstants.DB_PATH);
let app = express();

db(config[env]);
require('./config/express')(app, config[env]);
require('./config/routes')(app);
require('./config/passport')();

app.listen(webConstants.SERVER_PORT);