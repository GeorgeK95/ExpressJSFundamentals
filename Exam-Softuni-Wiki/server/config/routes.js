const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
    app.get('/', controllers.home.index)

    app.get('/users/register', auth.isAnonymous, controllers.users.registerGet)
    app.post('/users/register', auth.isAnonymous, controllers.users.registerPost)

    app.get('/users/login', auth.isAnonymous, controllers.users.loginGet)
    app.post('/users/login', auth.isAnonymous, controllers.users.loginPost)

    app.post('/users/logout', controllers.users.logout)

    app.get('/article/create', auth.isAuthenticated, controllers.articles.create)
    app.post('/article/create', auth.isAuthenticated, controllers.articles.createProcess)

    app.get('/article/edit/:id', auth.isAuthenticated, controllers.edits.edit)
    app.post('/article/edit/:id', auth.isAuthenticated, controllers.edits.editProcess)

    app.get('/article/all', controllers.articles.listArticles)

    app.get('/article/history/:id', auth.isAuthenticated, controllers.edits.history)

    app.get('/article/:id', controllers.articles.details)

    app.post('/article/lock/:id', auth.isInRole('Admin'), controllers.edits.lock)
    app.post('/article/unlock/:id', auth.isInRole('Admin'), controllers.edits.unlock)

    app.post('/article/search', controllers.articles.search)

    app.get('/unauthorized', (req, res) => {
        res.status(403)
        res.send('403 Unauthorized!')
        res.end()
    })

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}
