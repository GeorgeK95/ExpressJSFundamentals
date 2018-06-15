const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')

module.exports = {
    admin: (req, res) => {
        res.render('admin/admin')
    },
    registerGet: (req, res) => {
        res.render('users/register')
    },
    registerPost: (req, res) => {
        let reqUser = req.body

        let salt = encryption.generateSalt()
        let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)

        User.create({
            username: reqUser.username,
            firstName: reqUser.firstName,
            lastName: reqUser.lastName,
            salt: salt,
            hashedPass: hashedPassword
        }).then(user => {
            req.logIn(user, (err, user) => {
                if (err) {
                    res.locals.globalError = err
                    res.render('users/register', user)
                }

                let successMsg = encodeURIComponent('Successfully registered! Welcome.')
                res.redirect('/?successMsg=' + successMsg)
            })
        }).catch(err => {
            res.locals.globalError = 'Please choose another username, this is busy!'

            if (err.name === 'ValidationError') {
                let errorMessages = ''

                for (field in err.errors) errorMessages += capitalize(field) + ' is required.\r\n'

                if (!reqUser.password) errorMessages += capitalize('password') + ' is required.\r\n'

                res.locals.globalError = errorMessages
            }

            res.render('users/register', reqUser)
        })
    },
    loginGet: (req, res) => {
        res.render('users/login')
    },
    loginPost: (req, res) => {
        let userToLogin = req.body

        if (!userToLogin || !userToLogin.username || !userToLogin.password) {
            //empty request
            res.locals.globalError = 'Invalid credentials.'
            return res.render('users/login', userToLogin)
        }

        User.findOne({username: userToLogin.username}).then(user => {
            if (!user || !user.authenticate(userToLogin.password)) {
                res.locals.globalError = 'Invalid credentials.'
                res.render('users/login', userToLogin)
            } else {
                req.logIn(user, (err, user) => {
                    if (err) {
                        res.locals.globalError = 'Authentication not working!'
                        return res.render('users/login')
                    }

                    let msg = encodeURIComponent("You\'re successfully logged in.")
                    res.redirect('/?successMsg=' + msg)
                });
            }
        });
    },
    logout: (req, res) => {
        req.logout()
        res.redirect('/')
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}