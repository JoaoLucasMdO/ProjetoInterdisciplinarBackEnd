let professor = require('../models/professorModel')

exports.inicio = ((req, res) => {
    res.render('index', { inicio: '.' })
})

exports.get = ((req, res) => {
    res.render('index', { inicio: 'Hello there!' })
})