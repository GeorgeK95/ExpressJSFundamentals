/**
 * Created by George-Lenovo on 5/24/2018.
 */

//server
const SERVER_PORT = 3000;
const HTTP = 'http';

//extensions
const CSS_EXT = '.css';
const ICO_EXT = '.ico';

//prefixes
const PREVIOUS_PREFIX = '/../';
const PREVIOUS_PREFIX_2 = '../';

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

//views
const INDEX_VIEW = 'home/index';
const ADD_PRODUCT_VIEW = 'product/add';
const EDIT_PRODUCT_VIEW = 'product/edit';
const DELETE_PRODUCT_VIEW = 'product/delete';
const BUY_PRODUCT_VIEW = 'product/buy';
const ADD_CATEGORY_VIEW = 'category/add';
const CATEGORY_PRODUCTS_VIEW = 'category/products';

//html paths
const INDEX_HTML_PATH = '../view/home/index.html';
const PRODUCT_HTML_PATH = '../view/product/addC.html';
const ADD_CATEGORY_HTML_PATH = '../view/category/addC.html';

//module constants
const URL_MODULE = 'url';
const FS_MODULE = 'fs';
const QUERY_STRING_MODULE = 'querystring';
const PATH_MODULE = 'path';
const FORMIDABLE_MODULE = 'formidable';
const MV_MODULE = 'mv';
const MULTIPARTY_MODULE = 'multiparty';
const SHORTID_MODULE = 'shortid';

//controller paths
const BASE_HANDLER_PATH = './base';
const HOME_HANDLER_PATH = './home';
const STATIC_FILES_HANDLER_PATH = './static';
const PRODUCT_HANDLER_PATH = './product';
const CATEGORY_HANDLER_PATH = './category';
const INDEX_HANDLER_PATH = './controller/index';

const CONTROLLERS_PATH = '../controller';

//db
const DB_PATH = './config/database.config';
const DB_JSON_PATH = './db.json';
const CONTENT_IMAGE_PATH = '/../content/image/';
const CONTENT_IMAGE_PATH_2 = './content/image/';
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
const CONTENT = 'content';
const CONTENT_STR = '{content}';
const DEVELOPMENT_STR = 'development';
const EXPRESS_STR = 'express';
const PATH_STR = 'path';
const BODY_PARSER_STR = 'body-parser';
const SLASH_STR = '/';
const SLASH_CONTENT = SLASH_STR + CONTENT;
const DOUBLE_SLASH_STR = '\\';
const MULTER_STR = 'multer';
const IMAGE_STR = 'image';
const VIEW_ENGINE_STR = 'view engine';
const PUG_STR = 'pug';
const VIEWS_STR = 'views';
const VIEW_STR = 'view';

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

const CATEGORY_ADD_URL = '/category/add';
const CATEGORY_PRODUCTS_URL = '/category/:category/products';

const PRODUCT_ADD_URL = '/product/add';
const PRODUCT_EDIT_URL = '/product/edit/:id';
const PRODUCT_DELETE_URL = '/product/delete/:id';

const PRODUCT_BUY_URL = '/product/buy/:id';

const SUCCESSFULLY_ADDED_PRODUCT_URL = `/?success=${encodeURIComponent('Product was added successfully!')}`
const SUCCESSFULLY_EDITED_PRODUCT_URL = `/?success=${encodeURIComponent('Product was edited successfully!')}`
const SUCCESSFULLY_DELETED_PRODUCT_URL = `/?success=${encodeURIComponent('Product was deleted successfully!')}`

//encoding
const ENCODING_UTF_8 = 'utf-8';

//numbers
const ZERO = 0;

//models
const CATEGORY_STR = 'Category';
const PRODUCT_STR = 'Product';
const PRODUCTS_STR = 'products';
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
    PRODUCT_ADD_URL,
    PRODUCT_EDIT_URL,
    PRODUCT_DELETE_URL,
    PRODUCT_BUY_URL,
    CATEGORY_ADD_URL,
    CATEGORY_PRODUCTS_URL,
    SUCCESSFULLY_EDITED_PRODUCT_URL,
    SUCCESSFULLY_ADDED_PRODUCT_URL,
    SUCCESSFULLY_DELETED_PRODUCT_URL,
    CONTENT_URL,
    //http
    HTTP_GET,
    HTTP_POST,
    HTTP,
    //html paths
    INDEX_HTML_PATH,
    PRODUCT_HTML_PATH,
    ADD_CATEGORY_HTML_PATH,
    //controllers paths
    BASE_HANDLER_PATH,
    INDEX_HANDLER_PATH,
    HOME_HANDLER_PATH,
    CONTROLLERS_PATH,
    STATIC_FILES_HANDLER_PATH,
    PRODUCT_HANDLER_PATH,
    CATEGORY_HANDLER_PATH,
    //strings
    VIEWS_STR,
    VIEW_STR,
    VIEW_ENGINE_STR,
    PUG_STR,
    NOT_FOUND_STR,
    BINARY_STR,
    EMPTY_STR,
    DOT_STR,
    ASCII_STR,
    CONTENT_STR,
    CONTENT,
    SLASH_CONTENT,
    DEVELOPMENT_STR,
    EXPRESS_STR,
    BODY_PARSER_STR,
    DOUBLE_SLASH_STR,
    MULTER_STR,
    IMAGE_STR,
    PATH_STR,
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
    //prefixex
    PREVIOUS_PREFIX,
    PREVIOUS_PREFIX_2,
    //content types
    ICO_EXT,
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
    CONTENT_IMAGE_PATH_2,
    //events
    EVENT_TYPE_DATA,
    EVENT_TYPE_END,
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
    PRODUCT_STR,
    PRODUCTS_STR,
    PRODUCT_MODEL_PATH,
    CATEGORY_MODEL_PATH,
    //views
    INDEX_VIEW,
    ADD_CATEGORY_VIEW,
    CATEGORY_PRODUCTS_VIEW,
    ADD_PRODUCT_VIEW,
    EDIT_PRODUCT_VIEW,
    DELETE_PRODUCT_VIEW,
    BUY_PRODUCT_VIEW
};
