const express = require('express')
const usuarioRoutes = express.Router()
const usuarioController = require('../controller/usuarioController')

usuarioRoutes.post('/', usuarioController.criar)

module.exports = usuarioRoutes