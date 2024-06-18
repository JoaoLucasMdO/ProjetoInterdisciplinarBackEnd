const express = require('express')
const horarioRoutes = express.Router()
const horarioController = require('../controller/horarioController')
const auth = require('../middleware/auth')

horarioRoutes.post('/horario', auth.autenticar, horarioController.createhorario)
horarioRoutes.get('/horario/editar/:id', horarioController.getHorarioIdLista)
horarioRoutes.get('/horario', horarioController.gethorario)
horarioRoutes.get('/inicio', horarioController.getInicio)
horarioRoutes.get('/horario/:id', auth.autenticar, horarioController.gethorarioId)
horarioRoutes.delete('/horario/editar/:id', auth.autenticar, horarioController.delhorario)
horarioRoutes.put('/horario/editar', auth.autenticar, horarioController.atthorario)


module.exports = horarioRoutes