/**
 * Created by George-Lenovo on 5/27/2018.
 */

const webConstants = require('../webConstants');

const contentFilesHandler = require(webConstants.CONTENT_FILES_HANDLER_PATH);
const homeHandler = require(webConstants.HOME_HANDLER_PATH);
const addMovieHandler = require(webConstants.ADD_MOVIE_HANDLER_PATH);
const viewAllMoviesHandler = require(webConstants.VIEW_ALL_MOVIES_HANDLER_PATH);
const movieDetailsHandler = require(webConstants.MOVIE_DETAILS_HANDLER_PATH);

module.exports = [contentFilesHandler, homeHandler, addMovieHandler,viewAllMoviesHandler,movieDetailsHandler];