const blog = require('../models/blog-models')
const helper = require('../helpers/helper')
const postsModel = require('../models/blog-models')


const getPost = (request, response) => {
    response.status(200).json(postsModel)
}

module.exports = {
    getPost
}
