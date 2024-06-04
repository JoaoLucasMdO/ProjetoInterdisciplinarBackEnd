const express = require('express')
const bodyParser = require('body-parser')
const config = require('dotenv')
const app = express()
const port = 4000
config.config()

const professorRoute = require('./src/routes/professorRoutes')
const usuarioRoute = require('./src/routes/usuarioRoutes')

//Rota de conteúdo público
app.use('/', express.static('./src/views/'))

// Configurar acesso à BD.
const mongoose = require('mongoose');
let url = 'mongodb://127.0.0.1:27017/projetoInterDisciplinar'
let mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));

app.use(bodyParser.json())
app.use(professorRoute)
app.use(usuarioRoute)


app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })