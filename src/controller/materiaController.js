let Materia = require('../models/materiaModel')

exports.getMateria = async function (req, res) {
    /*
    #swagger.tags = ['Materia']
    #swagger.description = 'Lista as Materias cadastradas'
    */
    try {
        const result = await Materia.find()
        res.status(200).render('cadastrarMateria', {materias: result})
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getMateriaId = async function (req, res) {
    /*
    #swagger.tags = ['Materia']
    #swagger.description = 'Busca um Materia pelo ID'
    */
    try {
        const result = await Materia.findById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.attMateria = async function (req, res) {
        /*
    #swagger.tags = ['Materia']
    #swagger.description = 'Atualiza um Materia Cadastrado'
    */
    try {
        const result = await Materia.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.delMateria = async function (req, res) {
        /*
    #swagger.tags = ['Materia']
    #swagger.description = 'Deleta um Materia cadastrado'
    */
    try {
        await Materia.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Materia excluído com sucesso!' })
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao excluir o Materia.` })
    }
}

exports.createMateria = function (req, res) {
    /*
    #swagger.tags = ['Materia']
    #swagger.description = 'Insere um novo Materia'
    */
    let materia = new Materia(
        {
            nome: req.body.nome
        }
    );

    try {
        materia.save()
        res.status(201).send(materia.toJSON())
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar o Materia.` })
    }
};