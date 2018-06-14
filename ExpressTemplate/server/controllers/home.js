module.exports = {
    index: (req, res) => {
        let passedVariable = req.query.successMsg
        res.render('home/index', {globalSuccess: passedVariable})
    },
    about: (req, res) => {
        res.render('home/about')
    }
}
