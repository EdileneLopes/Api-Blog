//bibliotecas necessárias
const express = require('express')
const app = express()

//rota sendo chamada
const blog = require('./routes/blog-routes')

//lib mostrando que é um json
app.use(express.json())

app.use('/', blog)

module.exports = app