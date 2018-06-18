const Article = require('../data/Article');
const Edit = require('../data/Edit');

const mongoose = require('mongoose');

module.exports = {
    edit: (req, res) => {
        let articleId = req.params.id

        Article.findOne({'_id': articleId}).exec(function (artErr, foundArticle) {
            if (artErr) console.log(artErr)

            if (foundArticle.isLocked && req.user.roles.indexOf('Admin') == -1) return res.redirect('/?errMsg=This article is locked!',)

            let lastEditId = foundArticle.edits.sort(function (a, b) {
                return (a.creationDate > b.creationDate) ? 0 : ((b.creationDate > a.creationDate) ? -1 : 1)
            })[0]

            Edit.findOne({'_id': lastEditId}).exec(function (editErr, foundEdit) {
                if (editErr) console.log(editErr)

                res.locals.artId = foundArticle._id

                res.render('edit/edit', {article: foundArticle, edit: foundEdit, artId: foundArticle._id})
            })
        })
    },

    editProcess: (req, res) => {
        let reqArticle = req.body
        reqArticle.id = req.params.id

        Article.findOne({_id: reqArticle.id}, function (err, foundArticle) {
            if (err) return console.log(err)

            if (foundArticle.isLocked && req.user.roles.indexOf('Admin') == -1)
                return res.redirect(`/?errMsg=${'Only admins can edit current article.'}`)

            let editObj = {
                author: req.user.email,
                content: reqArticle.content,
                associatedArticle: foundArticle._id
            }

            Edit.create(editObj, function (err, createdEdit) {
                foundArticle.edits.push(createdEdit._id)
                foundArticle.save()

                let successMsg = encodeURIComponent('Article edited.')
                res.redirect(`/article/${foundArticle._id}?successMsg=${successMsg}`)
            })
        })
    },

    history: (req, res) => {
        let articleId = req.params.id

        Article.findOne({'_id': articleId}).exec(function (artErr, foundArticle) {
            if (artErr) console.log(artErr)

            let objectIds = []

            for (let current of foundArticle.edits) objectIds.push(mongoose.Types.ObjectId(current))

            Edit.find({
                '_id': {
                    $in: objectIds
                }
            }).sort({'creationDate': -1}).exec(function (editErr, foundEdits) {
                if (editErr) console.log(editErr)

                res.render('edit/history', {article: foundArticle, edits: foundEdits})
            })

        })
    },

    lock: (req, res) => {
        let articleId = req.params.id

        Article.findOne({'_id': articleId}).exec(function (artErr, foundArticle) {
            foundArticle.isLocked = true
            foundArticle.save()

            res.redirect(`/?successMsg=${'Article locked.'}`)
        })
    },

    unlock: (req, res) => {
        let articleId = req.params.id

        Article.findOne({'_id': articleId}).exec(function (artErr, foundArticle) {
            foundArticle.isLocked = false
            foundArticle.save()

            res.redirect(`/?successMsg=${'Article unlocked.'}`)
        })
    }
}
