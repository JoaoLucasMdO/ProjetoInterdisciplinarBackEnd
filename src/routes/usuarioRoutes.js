const express = require('express')
const usuarioRoutes = express.Router()
const usuarioController = require('../controller/usuarioController')

usuarioRoutes.post('/usuario', usuarioController.create)
usuarioRoutes.post('/usuario/login', usuarioController.login)

module.exports = usuarioRoutes