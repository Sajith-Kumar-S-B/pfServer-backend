
const express = require('express')
const userController = require('../Controller/userController')
const router = new express.Router()


// register API

router.post('/user/register',userController.register)


// export router

module.exports = router