//"Imports"
const express = require('express')
const config = require('dotenv')
const mongoose = require('mongoose');
const app = express()
const port = 4000
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser')
const path = require('path');

//Const Rotas
const professorRoute = require('./src/routes/professorRoutes')
const usuarioRoute = require('./src/routes/usuarioRoutes')
const materiaRoute = require('./src/routes/materiaRoutes')
const horarioRoute = require('./src/routes/horarioRoutes')

//Uses
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(professorRoute)
app.use(usuarioRoute)
app.use(materiaRoute)
app.use(horarioRoute)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

//Sets
app.set('view engine', 'ejs') 
app.set('views', './src/views')

//Config
config.config()
let db = mongoose.connection;
//Conexão do Banco
//Colocar url pessoal aqui e comentar a debaixo!
//let url = 'mongodb+srv://janmello123:joao123@projetointerdisciplinar.yuod8po.mongodb.net/projetoInterdisciplinar';
let url = 'mongodb+srv://janmello123:joao123@projetointerdisciplinar.yuod8po.mongodb.net/projetoInterdisciplinar';
mongoose.connect(url);
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));

//Página inicial
app.get('/', (req, res) => {
  /*
    #swagger.tags = ['Usuario']
    #swagger.description = 'Direciona o Usuário a página de Login'
    */
  res.render('login', {mensagemLogin:""})
    /*
    #swagger.tags = ['Usuario']
    #swagger.description = 'Renderiza a página de Login'
    */
})

app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })