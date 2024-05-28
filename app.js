const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const professorRoute = require('./routes/professorRoutes')
const usuarioRoute = require('./routes/usuarioRoutes')

app.set('views', './views')

app.set('view engine', 'ejs')

// Configurar acesso à BD.
const mongoose = require('mongoose');
let url = 'mongodb://127.0.0.1:27017/projetoInterdisciplinar'
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