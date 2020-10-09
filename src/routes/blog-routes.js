const express = require('express')
const blogController = require('../controllers/blog-controller')
const router = express.Router()

const blog = require('../controllers/blog-controller')

/**
@route GET posts
@desc Retornar todos os artigos
@access Public 
@endpoint http://localhost:porta/posts
**/
router.get('/posts', blogController.getPost)



module.exports = router