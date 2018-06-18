const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let articleSchema = new mongoose.Schema({
    title: {type: String, required: REQUIRED_VALIDATION_MESSAGE},
    date: {type: Date, default: Date.now},
    isLocked: {type: Boolean, default: false},
    edits: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Edit', default: []}]
})


let Article = mongoose.model('Article', articleSchema)

module.exports = Article