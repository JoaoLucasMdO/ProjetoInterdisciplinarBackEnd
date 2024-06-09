const express = require('express')
const bodyParser = require('body-parser')
const config = require('dotenv')
const mongoose = require('mongoose');
const app = express()
const port = 4000
const path = require('path');
const bcrypt = require('bcryptjs');
  
let db = mongoose.connection;


//Parte que o Gesley acrescentou:

//let url = 'mongodb+srv://GesleyOliveira:32475297@fatecvotorantim.op8iqc5.mongodb.net/FatecVotorantim';

let url = 'mongodb+srv://GesleyOliveira:32475297@fatecvotorantim.op8iqc5.mongodb.net/FatecVotorantim';


const { body, validationResult } = require('express-validator');

const { validaProfessor, validarCadastroProfessor } = require('./src/controller/validacoes');
app.use(express.json());
app.post('/professores', validaProfessor, async (req, res) => {
  // Se chegou até aqui, os dados estão validados
  const { name, cpf } = req.body;

  // Salvar os dados no banco de dados
  await db.collection('professores').insertOne({ name, cpf });

  res.status(201).send('Professor cadastrado com sucesso');
});

//Termina aqui


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

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/listar', (req, res) => {
  res.render('listar');
});

// Configurar acesso à BD.
//const mongoose = require('mongoose');
//mongodb://127.0.0.1:27017/projetoInterdisciplinar
//let url = 'mongodb+srv://janmello123:joao123@projetointerdisciplinar.yuod8po.mongodb.net/projetoInterdisciplinar'
//let mongoDB = url;
mongoose.connect(url);
mongoose.Promise = global.Promise;
//let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(professorRoute)
app.use(usuarioRoute)
app.use(cursoRoute)
app.use(horarioRoute)

app.use('../public/css/style.css', express.static('index'));

db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Definindo o modelo de usuário
const User = mongoose.model('User', { nome: String, email: String, senha: String });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/cadastro', [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('E-mail inválido'),
  body('senha').notEmpty().withMessage('Senha é obrigatória')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { nome, email, senha } = req.body;

  try {
      const user = new User({ nome, email, senha });
      await user.save();
      res.status(201).json({ message: 'Cadastro realizado com sucesso' });
  } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
});

const userSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senha: String
});
//const User = mongoose.model('User', userSchema);

// Rota para login
app.post('/login', async (req, res) => {
  const { login, senha } = req.body;

  try {
      const user = await User.findOne({ email: login });
      if (!user) {
          return res.status(400).json({ success: false, message: 'Usuário não encontrado' });
      }

      const isMatch = await bcrypt.compare(senha, user.senha);
      if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Senha incorreta' });
      }

      res.json({ success: true });
  } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});


app.listen(port, () => {
    console.log(`Projeto rodando na porta:${port}`)
  })