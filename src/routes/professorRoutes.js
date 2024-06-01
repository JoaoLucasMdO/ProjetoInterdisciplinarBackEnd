const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')
const auth = require('../middleware/auth')

professorRoutes.post('/professor/create', auth.autenticar, professorController.create)


module.exports = professorRoutes