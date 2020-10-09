const blog = require('../models/blog-models')
const helper = require('../helpers/helper')
const postsModel = require('../models/blog-models')


const getPost = (request, response) => {
    response.status(200).json(postsModel)
}




const creatPost = (request, response) => {
    const {titulo, conteudo} = request.body

    const newPost = {
        id: helper.obterNovoId(postsModel),
        dataCriacao: helper.novaData(postsModel),
        titulo: titulo,
        conteudo: conteudo
    
    }

    postsModel.push(newPost)

    response.status(201).json(newPost)
}


module.exports = {
    getPost,
    creatPost
}