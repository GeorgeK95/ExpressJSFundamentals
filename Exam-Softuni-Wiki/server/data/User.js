const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
    email: {type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true},
    salt: String,
    hashedPass: String,
    roles: [String]
})

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
    }
})

let User = mongoose.model('User', userSchema)

module.exports = User

module.exports.seedAdminUser = () => {
    User.find({}).then(users => {
        if (users.length > 0) return

        let salt = encryption.generateSalt()
        let hashedPass = encryption.generateHashedPassword(salt, 'admin')

        User.create({
            email: 'admin',
            salt: salt,
            hashedPass: hashedPass,
            roles: ['Admin']
        })
    })
}

module.exports.seedUser = () => {
    User.find({}).then(users => {
        if (users.length > 0) return

        let salt = encryption.generateSalt()
        let hashedPass = encryption.generateHashedPassword(salt, 'asd')

        User.create({
            email: 'asd',
            salt: salt,
            hashedPass: hashedPass,
            roles: []
        })
    })
}
