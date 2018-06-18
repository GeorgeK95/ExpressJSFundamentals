module.exports = {
    isAnonymous: (req, res, next) => {
        if (!req.isAuthenticated()) {
            next()
        } else {
            res.redirect('/?successMsg="You are already logged."')
        }
    },
    isAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.redirect('/users/login')
        }
    },
    isInRole: (role) => {
        return (req, res, next) => {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                next()
            } else {
                res.redirect('/unauthorized')
            }
        }
    }
}
