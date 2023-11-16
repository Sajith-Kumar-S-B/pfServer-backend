
const express = require('express')
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const router = new express.Router()


// register API

router.post('/user/register',userController.register)


// login API

router.post('/user/login',userController.login)




// addprojects Api

router.post('/projects/add',jwtMiddleware,projectController.addProjects)


// export router

module.exports = router