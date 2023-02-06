const express = require('express')
const userRouter = express.Router()

const customError = require('../errorHandling')
const { User } = require('../models')
const {
    comparePasswd,
    signUserToken,
    authorizeUser
} = require('../helpers/userHelpers')

// grand user token when login or signup only 
// using signUserToken func 

// check user token whether it is valid or not 
// using authorizeuser middleware 


// get all users
// just for development reasons
userRouter.get('/', async (req, res, next) => {
    const allusers = await User.find({})
    res.status(200).json(allusers)
})

// get user info by id
userRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const userInfo = await User.findById(id) // if not found it will throw error implicitly
        res.status(200).json(userInfo)

    } catch (error) {
        next(customError(401, 'invalid username or password'))
    }
})

// edit username by user id (with validation)

// edit email by user id (with validation)

// edit gender by user id (with validation)

// change passwd

// img (edit, upload, ...)

// get all orders by user id (with validation)

// cancel pending order 


module.exports = userRouter