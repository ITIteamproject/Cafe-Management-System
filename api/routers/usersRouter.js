const express = require('express')
const userRouter = express.Router()

const {User} = require('../models')

// get all users
userRouter.get('/', async (req, res, next) => {
    const allusers = await User.find({})
    res.status(200).json(allusers)
})

// get user info by id
userRouter.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        
        const userInfo = await User.findById(id)
        if(!userInfo) throw new Error('user not found')

        res.status(200).json(userInfo)

    } catch (error) {
        next(error)
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