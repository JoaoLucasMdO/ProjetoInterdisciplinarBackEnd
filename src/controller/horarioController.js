let Horario = require('../models/horarioModel')

exports.gethorario = async function (req, res) {
    try {
        const result = await Horario.find().populate('pertenceProf').populate('pertenceCurso')
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.gethorarioId = async function (req, res) {
    try {
        const result = await Horario.findById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.atthorario = async function (req, res) {
    try {
        const result = await Horario.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.delhorario = async function (req, res) {
    try {
        await Horario.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'horario excluído com sucesso!' })
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao excluir o horario.` })
    }
}

exports.createhorario = function (req, res) {
    /*
    #swagger.tags = ['horario']
    #swagger.description = 'Insere um novo horario'
    */
    horaI = new Date(req.body.horaInicio)
    horaF = new Date(req.body.horaFim)
    let horario = new Horario(
        {
            horaInicio: horaI,
            horaFim: horaF,
            pertenceProf: req.body.prof,
            pertenceCurso: req.body.curso
        }
    );

    try {
        horario.save()
        res.status(201).send(horario.toJSON())
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar o horario.` })
    }
};