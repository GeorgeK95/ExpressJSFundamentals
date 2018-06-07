/**
 * Created by George-Lenovo on 5/27/2018.
 */

//server
const SERVER_PORT = 3000;
const HTTP = 'http';

//extensions
const CSS_EXT = '.css';
const ICO_EXT = '.ico';
const JS_EXT = '.js';
const JPG_EXT = '.jpg';
const PNG_EXT = '.png';
const PREVIOUS_EXT = '/../';

//gulp task constants
const GULP = 'gulp';
const HTML_MIN_GULP = 'gulp-htmlmin';
const MINIFY_HTML_GULP = 'minify-html';
const VIEWS_DIR_GULP = './views/*.html';
const MINIFIED_DIR_GULP = './minifiedViews';

//events
const EVENT_TYPE_DATA = 'data';
const EVENT_TYPE_PART = 'part';
const EVENT_TYPE_END = 'end';
const EVENT_TYPE_CLOSE = 'close';

//content types
const CSS_CONTENT_TYPE = 'text/css';
const ICO_CONTENT_TYPE = 'image/x-icon';
const JS_CONTENT_TYPE = 'application/javascript';
const PNG_CONTENT_TYPE = 'image/png';
const JPG_CONTENT_TYPE = 'image/jpeg';
const HTML_CONTENT_TYPE = 'text/html';

//html paths
const HOME_HTML_PATH = '/views/home.html';
const MOVIE_DETAILS_HTML_PATH = 'views/details.html';
const ALL_MOVIES_HTML_PATH = '/views/viewAll.html';
const STATUS_HTML_PATH = 'views/status.html';
const PRODUCT_HTML_PATH = '../view/product/add.html';
const ADD_MOVIE_HTML_PATH = 'views/addMovie.html';
const VIEW_ALL_MOVIES_HTML_PATH = 'views/viewAll.html';

//module constants
const URL_MODULE = 'url';
const FS_MODULE = 'fs';
const QUERY_STRING_MODULE = 'querystring';
const PATH_MODULE = 'path';
const DB_MODULE = '../config/dataBase';
const MULTIPARTY_MODULE = 'multiparty';
const SHORTID_MODULE = 'shortid';

//handler paths
const BASE_HANDLER_PATH = './base';
const VIEW_ALL_MOVIES_HANDLER_PATH = './viewAllMovies';
const MOVIE_DETAILS_HANDLER_PATH = './details';
const HOME_HANDLER_PATH = './home';
const ADD_MOVIE_HANDLER_PATH = './addMovie';
const HEADER_HANDLER_PATH = './header';
const CONTENT_FILES_HANDLER_PATH = './content';
const PRODUCT_HANDLER_PATH = './product';
const INDEX_HANDLER_PATH = './handlers/index';

const DB_PATH = '../config/database';
const DB_JSON_PATH = './db.json';

//files
const DB_JSON_FILE_NAME = 'db.json';

//strings
const DEFAULT_STR = 'default';
const BINARY_STR = 'binary';
const NOT_FOUND_STR = '<h2 style="color: red;">404 Not Found !</h2>';
const EMTPY_STR = '';
const ASCII_STR = 'ascii';
const public_STR = '{content}';
const YOUR_MOVIE_POSTER_URL_STR = '{{Your movie poster URL}}';
const YEAR_STR = '{{YEAR}}';
const MOVIE_INDEX_STR = '{{MOVIE_INDEX}}';
const ADD_MOVIE_STR = 'addMovie';
const VIEW_ALL_MOVIES_STR = 'viewAllMovies';
const REPLACE_ME_STR = '{{replaceMe}}';
const STATUS_HEADER_STR = 'status-header';
const STATUS_HEADER_VALUE_FULL_STR = 'Full';

const MOVIE_POSTER_STR = '{{MOVIE_POSTER}}';
const MOVIE_TITLE_STR = '{{MOVIE_TITLE}}';
const MOVIE_YEAR = '{{MOVIE_YEAR}}';
const MOVIE_DESCRIPTION_STR = '{{MOVIE_DESCRIPTION}}';

//http status
const STATUS_OK = 200;
const STATUS_FOUND = 302;
const STATUS_NOT_FOUND = 404;
const STATUS_BAD_REQUEST = 400;
const STATUS_CREATE = 201;

//http method
const HTTP_GET = 'GET';
const HTTP_POST = 'POST';

//URLs
const HOME_URL = '/';
const DETAILS_URL = '/movies/details/';
const VIEW_ALL_MOVIES_URL = '/viewAllMovies';
const CONTENT_URL = '/content/';
const ADD_MOVIE_URL = '/addMovie';

//encoding
const ENCODING_UTF_8 = 'utf-8';

//templates
const MOVIE_POSTER_TEMPLATE = '<div class="movie"> <a href="/movies/details/{{MOVIE_INDEX}}"> <img class="moviePoster" src="{{Your movie poster URL}}"/> </a> <p>{{YEAR}}</p> </div>';
const MOVIE_DETAILS_TEMPLATE = '<div class="content"> <img src="{{MOVIE_POSTER}}" alt=""/> <h3>Title {{MOVIE_TITLE}}</h3> <h3>Year {{MOVIE_YEAR}}</h3> <p> {{MOVIE_DESCRIPTION}}</p> </div>';
const REPLACE_ME_TEMPLATE = '<div id="replaceMe">{{replaceMe}}</div>';

const FAILED_TO_ADD_MOVIE_TEMPLATE = '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>';
const SUCCESSFULLY_ADDED_MOVIE_TEMPLATE = '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>';

module.exports = {
    SERVER_PORT,
    //status
    STATUS_OK,
    STATUS_NOT_FOUND,
    STATUS_BAD_REQUEST,
    STATUS_CREATE,
    STATUS_FOUND,
    //url
    HOME_URL,
    DETAILS_URL,
    VIEW_ALL_MOVIES_URL,
    ADD_MOVIE_URL,
    CONTENT_URL,
    //http
    HTTP_GET,
    HTTP_POST,
    HTTP,
    //html paths
    HOME_HTML_PATH,
    MOVIE_DETAILS_HTML_PATH,
    ALL_MOVIES_HTML_PATH,
    STATUS_HTML_PATH,
    PRODUCT_HTML_PATH,
    ADD_MOVIE_HTML_PATH,
    VIEW_ALL_MOVIES_HTML_PATH,
    //handlers paths
    BASE_HANDLER_PATH,
    VIEW_ALL_MOVIES_HANDLER_PATH,
    MOVIE_DETAILS_HANDLER_PATH,
    INDEX_HANDLER_PATH,
    HOME_HANDLER_PATH,
    ADD_MOVIE_HANDLER_PATH,
    CONTENT_FILES_HANDLER_PATH,
    HEADER_HANDLER_PATH,
    PRODUCT_HANDLER_PATH,
    //strings
    NOT_FOUND_STR,
    BINARY_STR,
    DEFAULT_STR,
    EMTPY_STR,
    ASCII_STR,
    public_STR,
    YOUR_MOVIE_POSTER_URL_STR,
    YEAR_STR,
    MOVIE_INDEX_STR,
    ADD_MOVIE_STR,
    VIEW_ALL_MOVIES_STR,
    REPLACE_ME_STR,
    STATUS_HEADER_STR,
    STATUS_HEADER_VALUE_FULL_STR,
    MOVIE_POSTER_STR,
    MOVIE_TITLE_STR,
    MOVIE_YEAR,
    MOVIE_DESCRIPTION_STR,
    //modules
    URL_MODULE,
    QUERY_STRING_MODULE,
    FS_MODULE,
    PATH_MODULE,
    DB_MODULE,
    SHORTID_MODULE,
    MULTIPARTY_MODULE,
    //extension
    CSS_EXT,
    ICO_EXT,
    JS_EXT,
    PNG_EXT,
    JPG_EXT,
    PREVIOUS_EXT,
    //content types
    CSS_CONTENT_TYPE,
    ICO_CONTENT_TYPE,
    JS_CONTENT_TYPE,
    PNG_CONTENT_TYPE,
    JPG_CONTENT_TYPE,
    HTML_CONTENT_TYPE,
    //db
    DB_PATH,
    DB_JSON_PATH,
    //gulp task constants
    GULP,
    HTML_MIN_GULP,
    MINIFY_HTML_GULP,
    VIEWS_DIR_GULP,
    MINIFIED_DIR_GULP,
    //events
    EVENT_TYPE_DATA,
    EVENT_TYPE_END,
    EVENT_TYPE_CLOSE,
    EVENT_TYPE_PART,
    //files
    DB_JSON_FILE_NAME,
    //encoding
    ENCODING_UTF_8,
    //templates
    MOVIE_POSTER_TEMPLATE,
    MOVIE_DETAILS_TEMPLATE,
    SUCCESSFULLY_ADDED_MOVIE_TEMPLATE,
    FAILED_TO_ADD_MOVIE_TEMPLATE,
    REPLACE_ME_TEMPLATE
};