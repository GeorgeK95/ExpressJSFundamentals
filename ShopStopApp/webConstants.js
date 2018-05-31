/**
 * Created by George-Lenovo on 5/24/2018.
 */

//server
const SERVER_PORT = 3000;
const HTTP = 'http';

//extensions
const CSS_EXT = '.css';
const ICO_EXT = '.ico';
const PREVIOUS_EXT = '/../';

//gulp task constants
const GULP = 'gulp';
const CLEAN_CSS_GULP = 'gulp-clean-css';
const MINIFY_CSS_GULP = 'minify-css';
const CSS_FILES_DIR_GULP = './content/style/*.css';
const CSS_DIR_GULP = './content/style';
const RENAME_GULP = 'gulp-rename';

//events
const EVENT_TYPE_DATA = 'data';
const EVENT_TYPE_PART = 'part';
const EVENT_TYPE_END = 'end';
const EVENT_TYPE_OPEN = 'open';
const EVENT_TYPE_CLOSE = 'close';
const EVENT_TYPE_ERROR = 'err';

//content types
const CSS_CONTENT_TYPE = 'text/css';
const ICO_CONTENT_TYPE = 'image/x-icon';
const HTML_CONTENT_TYPE = 'text/html';

//html paths
const INDEX_HTML_PATH = '../view/home/index.html';
const PRODUCT_HTML_PATH = '../view/product/add.html';
const ADD_CATEGORY_HTML_PATH = '../view/category/add.html';

//module constants
const URL_MODULE = 'url';
const FS_MODULE = 'fs';
const QUERY_STRING_MODULE = 'querystring';
const PATH_MODULE = 'path';
const FORMIDABLE_MODULE = 'formidable';
const MV_MODULE = 'mv';
const MULTIPARTY_MODULE = 'multiparty';
const SHORTID_MODULE = 'shortid';

//handler paths
const BASE_HANDLER_PATH = './base';
const HOME_HANDLER_PATH = './home';
const STATIC_FILES_HANDLER_PATH = './static';
const PRODUCT_HANDLER_PATH = './product';
const CATEGORY_HANDLER_PATH = './category';
const INDEX_HANDLER_PATH = './handler/index';

//db
const DB_PATH = './config/database.config';
const DB_JSON_PATH = './db.json';
const CONTENT_IMAGE_PATH = '/../content/image/';
const DB_JSON_FILE_NAME = 'db.json';
const MONGOOSE = 'mongoose';
const CONNECTED_SUCCESSFULLY_MESSAGE = 'Connected successfully.';
const DB_CONFIG_PATH = './config/config';

//strings
const BINARY_STR = 'binary';
const NOT_FOUND_STR = '<h2 style="color: red;">404 Not Found !</h2>';
const EMPTY_STR = '';
const DOT_STR = '.';
const ASCII_STR = 'ascii';
const CONTENT_STR = '{content}';
const DEVELOPMENT_STR = 'development';

//http status
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_SEE_OTHER = 303;
const STATUS_NOT_FOUND = 404;

//http method
const HTTP_GET = 'GET';
const HTTP_POST = 'POST';

//URLs
const HOME_URL = '/';
const CONTENT_URL = '/content/';
const PRODUCT_URL = '/product/add';
const CATEGORY_ADD_URL = '/category/add';

//encoding
const ENCODING_UTF_8 = 'utf-8';

//numbers
const ZERO = 0;

//models
const CATEGORY_STR = 'Category';
const PRODUCT_STR = 'Product';
const PRODUCT_MODEL_PATH = '../model/Product';
const CATEGORY_MODEL_PATH = '../model/Category';

module.exports = {
    SERVER_PORT,
    //status
    STATUS_OK,
    STATUS_CREATED,
    STATUS_NOT_FOUND,
    STATUS_SEE_OTHER,
    //url
    HOME_URL,
    PRODUCT_URL,
    CATEGORY_ADD_URL,
    CONTENT_URL,
    //http
    HTTP_GET,
    HTTP_POST,
    HTTP,
    //html paths
    INDEX_HTML_PATH,
    PRODUCT_HTML_PATH,
    ADD_CATEGORY_HTML_PATH,
    //handlers paths
    BASE_HANDLER_PATH,
    INDEX_HANDLER_PATH,
    HOME_HANDLER_PATH,
    STATIC_FILES_HANDLER_PATH,
    PRODUCT_HANDLER_PATH,
    CATEGORY_HANDLER_PATH,
    //strings
    NOT_FOUND_STR,
    BINARY_STR,
    EMPTY_STR,
    DOT_STR,
    ASCII_STR,
    CONTENT_STR,
    DEVELOPMENT_STR,
    //modules
    URL_MODULE,
    QUERY_STRING_MODULE,
    FS_MODULE,
    PATH_MODULE,
    FORMIDABLE_MODULE,
    MV_MODULE,
    SHORTID_MODULE,
    MULTIPARTY_MODULE,
    //extension
    CSS_EXT,
    ICO_EXT,
    PREVIOUS_EXT,
    //content types
    CSS_CONTENT_TYPE,
    ICO_CONTENT_TYPE,
    HTML_CONTENT_TYPE,
    //db
    DB_PATH,
    DB_CONFIG_PATH,
    DB_JSON_PATH,
    DB_JSON_FILE_NAME,
    CONNECTED_SUCCESSFULLY_MESSAGE,
    MONGOOSE,
    CONTENT_IMAGE_PATH,
    //events
    EVENT_TYPE_DATA,
    EVENT_TYPE_END,
    EVENT_TYPE_OPEN,
    EVENT_TYPE_OPEN,
    EVENT_TYPE_CLOSE,
    EVENT_TYPE_ERROR,
    EVENT_TYPE_PART,
    //encoding
    ENCODING_UTF_8,
    //gulp task constants
    GULP,
    CLEAN_CSS_GULP,
    CSS_DIR_GULP,
    RENAME_GULP,
    MINIFY_CSS_GULP,
    CSS_FILES_DIR_GULP,
    //numbers
    ZERO,
    //models
    CATEGORY_STR,
    CATEGORY_STR,
    PRODUCT_STR,
    PRODUCT_MODEL_PATH,
    CATEGORY_MODEL_PATH
};