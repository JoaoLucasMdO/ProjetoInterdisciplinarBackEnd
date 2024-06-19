let Professor = require('../models/professorModel')
const { validationResult } = require('express-validator');

exports.getProf = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Lista os professores'
    */
    try {
        const result = await Professor.find()
        res.status(200).render('cadastrarProfessor', {professores: result})
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.getProfId = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Obtém um professor pelo ID'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    try {
        const result = await Professor.findById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.getProfIdLista = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Obtém um professor pelo ID'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    try {
        const professor = await Professor.findById(req.params.id)
        const result = await Professor.find()
        res.status(200).render('editarProfessor', {professores: result, professor: professor})
    } catch (err) {
        res.status(500).json(err)
    }
};


exports.attProf = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Atualiza os dados do professor pelo ID'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const result = await Professor.findByIdAndUpdate(req.body.id, req.body, {new: false})
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.delProf = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Deleta o professor pelo ID'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    try {
        await Professor.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'Professor excluído com sucesso!' })
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao excluir o professor.` })
    }
};

exports.createProf = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Insere um novo professor'
    */

    // Verifica se houve algum erro de validação nos parâmetros da requisição
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Cria uma instância de Professor com os dados da requisição
    let professor = new Professor({
        nome: req.body.nome,
        cpf: req.body.cpf,
        materias: req.body.materias
    });

    try {
        // Tenta salvar o professor no banco de dados
        await professor.save();
        // Se o professor for salvo com sucesso, retorna 201 Created
         res.status(201).send(professor.toJSON());
    } catch (err) {
        // Se ocorrer um erro ao salvar o professor, retorna 500 Internal Server Error
         res.status(500).send({ message: `${err.message} - falha ao cadastrar o professor.` });
    }
};

exports.addMateria = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Adiciona uma materia ao professor'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    try {
        let professor = await Professor.findById(req.params.id)
        professor.materias.push(req.body.materias)

        await Professor.findByIdAndUpdate(req.params.id, professor)
        res.status(200).send(professor.toJSON())
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao adicionar a materia.` })
    }
};

exports.delMateria = async function (req,res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Deleta uma materia de um professor pelo ID do professor e o nome da matéria'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    try{
        let professor = await Professor.findById(req.params.id)
        const index = professor.materias.findIndex(x => x == req.body.materias)

        professor.materias.splice(index, 1)
        await Professor.findByIdAndUpdate(req.params.id, professor)
        res.status(200).send(professor.toJSON())
    }catch(err){
        res.status(500).send({ message: `${err.message} - falha ao remover a materia.` })
    }
};

