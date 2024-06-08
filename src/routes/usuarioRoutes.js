const express = require('express')
const usuarioRoutes = express.Router()
const usuarioController = require('../controller/usuarioController')
const alert = require('../public/js/usuario')

usuarioRoutes.post('/usuario', usuarioController.create, alert.mensagemAlert)
usuarioRoutes.post('/usuario/login', usuarioController.login)
usuarioRoutes.get('/usuario', usuarioController.cadastro)
usuarioRoutes.get('/login', usuarioController.login)

module.exports = usuarioRoutes