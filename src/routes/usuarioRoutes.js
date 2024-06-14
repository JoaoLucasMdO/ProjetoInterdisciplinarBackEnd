const express = require('express')
const usuarioRoutes = express.Router()
const usuarioController = require('../controller/usuarioController')
const validacao = require('../controller/validacoes')

usuarioRoutes.post('/usuario', validacao.validaUsuario(), usuarioController.create)
usuarioRoutes.post('/usuario/login', usuarioController.logar)
usuarioRoutes.get('/usuario',  usuarioController.cadastro)
usuarioRoutes.get('/login', usuarioController.login)



module.exports = usuarioRoutes