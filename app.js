const express = require('express')
const bodyParser = require('body-parser')
const config = require('dotenv')
const app = express()
const port = 4000
config.config()

const professorRoute = require('./src/routes/professorRoutes')
const usuarioRoute = require('./src/routes/usuarioRoutes')
const cursoRoute = require('./src/routes/cursoRoutes')

app.set('view engine', 'ejs') 
app.set('views', './src/views/professor')
app.set('views', './src/views/usuario')
app.set('views', './src/views/')

app.get('/', (req, res) => {
  res.render('index')
})

// Configurar acesso à BD.
const mongoose = require('mongoose');
let url = 'mongodb+srv://janmello123:joao123@projetointerdisciplinar.yuod8po.mongodb.net/projetoInterdisciplinar'
let mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));

app.use(bodyParser.json())
app.use(professorRoute)
app.use(usuarioRoute)
app.use(cursoRoute)


app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })