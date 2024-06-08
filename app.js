const express = require('express')
const bodyParser = require('body-parser')
const config = require('dotenv')
const app = express()
const port = 4000
config.config()

const professorRoute = require('./src/routes/professorRoutes')
const usuarioRoute = require('./src/routes/usuarioRoutes')
const cursoRoute = require('./src/routes/cursoRoutes')
const horarioRoute = require('./src/routes/horarioRoutes')

app.set('view engine', 'ejs') 
app.set('views', './src/views')



app.get('/', (req, res) => {
  res.render('login', {mensagemLogin:""})
})

// Configurar acesso à BD.
const mongoose = require('mongoose');
//mongodb://127.0.0.1:27017/projetoInterdisciplinar
let url = 'mongodb+srv://janmello123:joao123@projetointerdisciplinar.yuod8po.mongodb.net/projetoInterdisciplinar'
let mongoDB = url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(professorRoute)
app.use(usuarioRoute)
app.use(cursoRoute)
app.use(horarioRoute)


app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })