const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')

professorRoutes.get('/', professorController.inicio)
professorRoutes.get('/user', professorController.get)

module.exports = professorRoutes