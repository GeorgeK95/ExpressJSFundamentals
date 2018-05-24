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

//events
const EVENT_TYPE_DATA = 'data';
const EVENT_TYPE_PATH = 'path';
const EVENT_TYPE_END = 'end';

//content types
const CSS_CONTENT_TYPE = 'text/css';
const ICO_CONTENT_TYPE = 'image/x-icon';
const HTML_CONTENT_TYPE = 'text/html';

//html paths
const INDEX_HTML_PATH = '../view/home/index.html';
const PRODUCT_HTML_PATH = '../view/product/add.html';

//module constants
const URL_MODULE = 'url';
const FS_MODULE = 'fs';
const QUERY_STRING_MODULE = 'querystring';
const PATH_MODULE = 'path';
const MULTIPARTY_MODULE = 'multiparty';
const SHORTID_MODULE = 'shortid';

//handler paths
const BASE_HANDLER_PATH = './base';
const HOME_HANDLER_PATH = './home';
const STATIC_FILES_HANDLER_PATH = './static';
const PRODUCT_HANDLER_PATH = './product';
const INDEX_HANDLER_PATH = './handler/index';

const DB_PATH = '../config/database';
const DB_JSON_PATH = './db.json';

//files
const DB_JSON_FILE_NAME = 'db.json';

//strings

const BINARY_STR = 'binary';
const NOT_FOUND_STR = '<h2 style="color: red;">404 Not Found !</h2>';
const EMTPY_STR = '';
const ASCII_STR = 'ascii';
const CONTENT_STR = '{content}';

//http status
const STATUS_OK = 200;
const STATUS_FOUND = 302;
const STATUS_NOT_FOUND = 404;

//http method
const HTTP_GET = 'GET';
const HTTP_POST = 'POST';

//URLs
const HOME_URL = '/';
const CONTENT_URL = '/content/';
const PRODUCT_URL = '/product/add';

//encoding
const ENCODING_UTF_8 = 'utf-8';


module.exports = {
    SERVER_PORT,
    //status
    STATUS_OK,
    STATUS_NOT_FOUND,
    STATUS_FOUND,
    //url
    HOME_URL,
    PRODUCT_URL,
    CONTENT_URL,
    //http
    HTTP_GET,
    HTTP_POST,
    HTTP,
    //html paths
    INDEX_HTML_PATH,
    PRODUCT_HTML_PATH,
    //handlers paths
    BASE_HANDLER_PATH,
    INDEX_HANDLER_PATH,
    HOME_HANDLER_PATH,
    STATIC_FILES_HANDLER_PATH,
    PRODUCT_HANDLER_PATH,
    //strings
    NOT_FOUND_STR,
    EMTPY_STR,
    ASCII_STR,
    CONTENT_STR,
    //modules
    URL_MODULE,
    QUERY_STRING_MODULE,
    FS_MODULE,
    PATH_MODULE,
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
    DB_JSON_PATH,
    //events
    EVENT_TYPE_DATA,
    EVENT_TYPE_END,
    EVENT_TYPE_PATH,
    //files
    DB_JSON_FILE_NAME,
    //encoding
    ENCODING_UTF_8
};
