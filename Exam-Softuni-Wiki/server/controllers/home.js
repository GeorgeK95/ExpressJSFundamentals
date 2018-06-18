const Article = require('../data/Article');
const Edit = require('../data/Edit');

module.exports = {
    index: (req, res) => {

        let successMsg = req.query.successMsg
        let errMsg = req.query.errMsg

        Article.find({}).sort({'date': -1}).exec(function (err, articles) {
            if (err) console.log(err)

            let latestArticle = articles.sort(function (a, b) {
                return (a.date > b.date) ? 0 : ((b.date > a.date) ? -1 : 1)
            })[0]

            if (latestArticle) {
                Edit.findOne({'_id': latestArticle.edits[latestArticle.edits.length - 1]}, function (err, foundEdit) {
                    if (err) console.log(err)

                    let content = ''

                    for (let current of foundEdit.content.split(' ').slice(0, 50)) content += current + ' '

                    latestArticle.content = content

                    res.render('home/index', {
                        globalSuccess: successMsg,
                        globalError: errMsg,
                        articles,
                        latestArticle
                    })
                })
            } else {
                res.render('home/index', {globalSuccess: successMsg, articles, latestArticle})
            }
        })
    }
}
