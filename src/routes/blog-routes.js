const express = require('express')
const blogController = require('../controllers/blog-controller')
const router = express.Router()


/**
@route GET posts
@desc Retornar todos os artigos
@access Public 
@endpoint http://localhost:porta/posts
**/
router.get('/posts', blogController.obterPost)

/**
 @route POST post
 @desc Cria um novo artigo no blog
 @access Public
 @endpoint http://localhost:porta/posts 
 **/
router.post('/post', blogController.criarPost)

/**
 @route DELETE post
 @desc apaga um novo artigo no blog, pelo id
 @access Public
 @endpoint http://localhost:porta/posts/:id 
 **/
router.delete('/posts/:id', blogController.apagarPost)

module.exports = router