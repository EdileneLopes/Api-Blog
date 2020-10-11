
const helper = require('../helpers/helper')

const postsModel = [{
    id: 1,
    dataCriacao: '09/10/2020',
    titulo: 'Inserção de mais mulheres na tecnologia',
    conteudo: 'Reprograma lança curso somente para mulheres no\
                intuito de reduzir o gap de mulheres no setor...',
    etiquetas: ['mulher na tecnologia', 'woman in tech', 'tecnologia']
    
},

{ 
    id: 2,
    dataCriacao: helper.novaData(),
    titulo: 'Pessoas e tecnologia',
    conteudo: 'Lidamos mais com pessoas que com ...',
    etiquetas: ['códigos', 'mulher', 'tecnologia', 'pessoas']
}
]

module.exports = postsModel