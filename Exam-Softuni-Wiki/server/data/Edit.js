const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let editSchema = new mongoose.Schema({
    author: {type: String, required: REQUIRED_VALIDATION_MESSAGE},
    creationDate: {type: Date, default: Date.now},
    content: {type: String, required: REQUIRED_VALIDATION_MESSAGE},
    associatedArticle: {type: mongoose.SchemaTypes.ObjectId, ref: 'Edit'}
})


let Edit = mongoose.model('Edit', editSchema)

module.exports = Edit