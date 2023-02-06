const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const util = require('util')

const signAsync = util.promisify(jwt.sign)
const verifyAsync = util.promisify(jwt.verify)

const customError = require('../errorHandling')

const secretKey = process.env.SECRET_KEY || "kdeimco"

const comparePasswd = async (password, hash) => {
    const isMath = await bcrypt.compare(password, hash)
    if (!isMath) throw customError(401, 'invalid email or password')
}

// grand token to user 
const signUserToken = (id) =>
    signAsync({ id }, secretKey)

// verify authorize user (middleware)
const authorizeUser = async (req, res, next) => {
    const { id } = req.params
    const { authorization: token} = req.headers
    
    try {
        // if all good it will return payload
        // otherwise will throw error
        const payload = await verifyAsync(token, secretKey)
        console.log('catch')
        // if(payload.id !== id) throw Error()
        next()

    } catch (error) {
        // custom err returns error object
        next(customError(403, 'unauthorized'))
    }
}

module.exports = {
    comparePasswd,
    signUserToken,
    authorizeUser
}