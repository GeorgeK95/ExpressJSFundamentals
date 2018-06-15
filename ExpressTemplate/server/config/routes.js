const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
    app.get('/', controllers.home.index)

    //protected for logged only
    app.get('/about', auth.isAuthenticated, controllers.home.about)

    //protected for admin only
    app.get('/admin', auth.isInRole('Admin'), controllers.users.admin)

    app.get('/users/register', auth.isAnonymous, controllers.users.registerGet)
    app.post('/users/register', auth.isAnonymous, controllers.users.registerPost)

    app.get('/users/login', auth.isAnonymous, controllers.users.loginGet)
    app.post('/users/login', auth.isAnonymous, controllers.users.loginPost)

    app.post('/users/logout', controllers.users.logout)

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}
