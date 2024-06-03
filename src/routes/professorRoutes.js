const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')
const auth = require('../middleware/auth')

professorRoutes.post('/professor', auth.autenticar, professorController.createProf)
professorRoutes.get('/professor', auth.autenticar, professorController.getProf)
professorRoutes.get('/professor/:id', auth.autenticar, professorController.getProfId)


module.exports = professorRoutes