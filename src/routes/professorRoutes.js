const express = require('express')
const professorRoutes = express.Router()
const professorController = require('../controller/professorController')

professorRoutes.post('/', professorController.criar)


module.exports = professorRoutes