const Article = require('../data/Article');
const Edit = require('../data/Edit');
const mongoose = require('mongoose');

module.exports = {
    search: (req, res) => {
        let searchStr = req.body.search

        Article.find({'title': new RegExp(searchStr, "i")}, function (err, foundArticles) {
            res.render('article/search', {articles: foundArticles, searched: searchStr})
        })

    }, create: (req, res) => {
        res.render('article/create')
    },
    createProcess: (req, res) => {
        let reqArticle = req.body

        Article.create({title: reqArticle.title}, function (err, createdArticle) {
            if (err) return console.log(err)

            let editObj = {
                author: req.user.email,
                content: reqArticle.content,
                associatedArticle: createdArticle._id
            }

            Edit.create(editObj, function (err, createdEdit) {
                createdArticle.edits.push(createdEdit._id)
                createdArticle.save()

                let successMsg = encodeURIComponent('Article saved.')
                res.redirect('/?successMsg=' + successMsg)
            })
        })
    },

    listArticles: (req, res) => {
        Article.find({}).sort('title').exec(function (err, articles) {
            if (err) console.log(err)

            res.render('article/all', {articles})
        })
    },

    details: (req, res) => {
        let articleId = req.params.id
        let passedVariable = req.query.successMsg

        try {
            mongoose.Types.ObjectId(articleId)
        } catch (ex) {
            return res.redirect('/?errMsg=Invalid article id.')
        }

        Article.findOne({'_id': articleId}).exec(function (artErr, foundArticle) {
            if (artErr) console.log(artErr)

            if (!foundArticle)
                tryToFindEdit(req, res, articleId, foundArticle, passedVariable);
            else {
                let lastEditId = foundArticle.edits.sort(function (a, b) {
                    return (a.creationDate > b.creationDate) ? 0 : ((b.creationDate > a.creationDate) ? -1 : 1)
                })[0]

                Edit.findOne({'_id': lastEditId}).exec(function (editErr, foundEdit) {
                    if (editErr) console.log(editErr)

                    res.render('article/details', {
                        globalSuccess: passedVariable,
                        article: foundArticle,
                        edit: foundEdit
                    })
                })
            }
        })
    },
}

function tryToFindEdit(req, res, editId, foundArticle, passedVariable) {
    if (!req.user) return res.redirect('/users/login')

    Edit.findOne({'_id': editId}).exec(function (editErr, foundEdit) {
        if (editErr) console.log(editErr)

        res.locals.isEditStory = true

        return res.render('article/details', {globalSuccess: passedVariable, article: foundArticle, edit: foundEdit})
    })
}
