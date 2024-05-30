const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')

professorRoutes.post('/professor/create', professorController.create)


module.exports = professorRoutes