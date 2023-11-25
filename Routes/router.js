
const express = require('express')
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerConfig = require('../middlewares/multerMiddleware')
const router = new express.Router()


// register API

router.post('/user/register',userController.register)


// login API

router.post('/user/login',userController.login)




// addprojects Api

router.post('/projects/add',jwtMiddleware,multerConfig.single("projectImage"),projectController.addProjects)




// get userprojects Api

router.get('/projects/all-projects',jwtMiddleware,projectController.allUserProjects)

// get allprojects Api

router.get('/projects/all',jwtMiddleware,projectController.getallProjects)

// get homeprojects Api

router.get('/projects/home-projects',projectController.getHomeProjects)



// edit projects Api

router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProjectController)




// export router

module.exports = router