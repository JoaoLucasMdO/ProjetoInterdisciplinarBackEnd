const express = require('express')
const materiaRoutes = express.Router()
const materiaController = require('../controller/materiaController')
const auth = require('../middleware/auth')

materiaRoutes.post('/materia', auth.autenticar, materiaController.createMateria)
materiaRoutes.get('/materia',  materiaController.getMateria)
materiaRoutes.get('/materia/:id', auth.autenticar, materiaController.getMateriaId)
materiaRoutes.get('/materia/editar/:id', materiaController.getMateriaIdLista)
materiaRoutes.delete('/materia/editar/:id', auth.autenticar, materiaController.delMateria)
materiaRoutes.put('/materia/editar', auth.autenticar, materiaController.attMateria)

module.exports = materiaRoutes