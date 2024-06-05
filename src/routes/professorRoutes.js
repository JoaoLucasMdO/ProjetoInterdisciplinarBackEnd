const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')
const auth = require('../middleware/auth')

professorRoutes.post('/professor', auth.autenticar, professorController.createProf)
professorRoutes.post('/professor/curso/:id', auth.autenticar, professorController.addCurso)
professorRoutes.get('/professor', auth.autenticar, professorController.getProf)
professorRoutes.get('/professor/:id', auth.autenticar, professorController.getProfId)
professorRoutes.delete('/professor/:id', auth.autenticar, professorController.delProf)
professorRoutes.delete('/professor/curso/:id', auth.autenticar, professorController.delCurso)
professorRoutes.put('/professor/:id', auth.autenticar, professorController.attProf)

module.exports = professorRoutes