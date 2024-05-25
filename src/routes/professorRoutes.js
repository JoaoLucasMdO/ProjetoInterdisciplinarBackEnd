const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')

professorRoutes.post('/professor', professorController.criar)


module.exports = professorRoutes