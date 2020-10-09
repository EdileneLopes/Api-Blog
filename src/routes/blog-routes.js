const express = require('express')
const blogController = require('../controllers/blog-controller')
const router = express.Router()


/**
@route GET posts
@desc Retornar todos os artigos
@access Public 
@endpoint http://localhost:porta/posts
**/
router.get('/posts', blogController.getPost)

/**
 @route POST post
 @desc Cria um novo artigo no blog
 @access Public
 @endpoint http://localhost:porta/posts 
 **/
router.post('/post', blogController.creatPost)

module.exports = router