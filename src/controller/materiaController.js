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

exports.getMateriaIdLista = async function (req, res) {
    /*
    #swagger.tags = ['Materia']
    #swagger.description = 'Obtém um materia pelo ID'
    #swagger.parameters['id'] = { description: 'ID do materia' }
    */
    try {
        const materia = await Materia.findById(req.params.id)
        const result = await Materia.find()
        res.status(200).render('editarMateria', {materias: result, materia: materia})
    } catch (err) {
        res.status(500).json(err)
    }
};

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
    delete req.body._id //Removemos o _id do body que foi recebido na req.
    try {
        const result = await Materia.findByIdAndUpdate(req.body.id, req.body, {new: false})
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