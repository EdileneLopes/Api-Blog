const app = require('./src/app')

const porta = 5001

app.listen(porta, () => {
    console.log(`Servidor do blog rodando na porta ${porta}`);
})

