
const helper = require('../helpers/helper')
const postsModel = require('../models/blog-models')


const obterPost = (requisicao, resposta) => {
    resposta.status(200).json(postsModel)
}


const criarPost = (requisicao, resposta) => {
    const { titulo, conteudo, etiquetas } = requisicao.body

    const novoPost = {
        id: helper.obterNovoId(postsModel),
        dataCriacao: helper.novaData(postsModel),
        titulo: titulo,
        conteudo: conteudo,
        etiquetas: etiquetas

    }

    postsModel.push(novoPost)

    resposta.status(201).json(novoPost)
}

const apagarPost = (requisicao, resposta) => {
    const { id } = requisicao.params

    let listaPosts = postsModel.filter(post => {
        return post.id == id
        
    })[0]

    const index = postsModel.indexOf(listaPosts)
    
    postsModel.splice(index, 1)

    resposta.json(postsModel)
}


module.exports = {
    obterPost,
    criarPost,
    apagarPost
}