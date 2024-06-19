let Horario = require('../models/horarioModel')
let Professor = require('../models/professorModel')
let Materia = require('../models/materiaModel')
const { validationResult } = require('express-validator');

exports.gethorario = async function (req, res) {
        /*
       #swagger.tags = ['Horário']
       #swagger.description = 'Adiciona o horário ao Professor'
       */
    try {
        const result = await Horario.find().populate('pertenceProf').populate('pertenceMateria')
        const professor = await Professor.find()
        const materia = await Materia.find()
        res.status(200).render('cadastrarHorario', {professores:professor, materias: materia, horarios:result})
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getHorarioIdLista = async function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Obtém um professor pelo ID'
    #swagger.parameters['id'] = { description: 'ID do professor' }
    */
    try {
        const horario = await Horario.findById(req.params.id).populate('pertenceProf').populate('pertenceMateria')
        const result = await Horario.find().populate('pertenceProf').populate('pertenceMateria')
        res.status(200).render('editarHorario', {horarios: result, horario: horario})
    } catch (err) {
        res.status(500).json(err)
    }
};

exports.gethorarioId = async function (req, res) {
        /*
       #swagger.tags = ['Horário']
       #swagger.description = 'Busca o horário pelo id'
       */
    try {
        const result = await Horario.findById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.atthorario = async function (req, res) {
        /*
       #swagger.tags = ['Horário']
       #swagger.description = 'Atualiza o horário pelo id'
       */
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
       }
       
    try {
        const result = await Horario.findByIdAndUpdate(req.body.id, req.body, {new: true})
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.delhorario = async function (req, res) {
       /*
       #swagger.tags = ['Horário']
       #swagger.description = 'Deleta o horário pelo id'
       */
    try {
        await Horario.findByIdAndDelete(req.params.id)
        res.status(200).send({ message: 'horario excluído com sucesso!' })
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao excluir o horario.` })
    }
}

exports.createhorario = async function (req, res) {
    /*
    #swagger.tags = ['Horário']
    #swagger.description = 'Insere um novo horario'
    */

   // Verifica se houve algum erro de validação nos parâmetros da requisição
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   
    let horario = new Horario(
        {
            horaInicio: req.body.horaInicio,
            horaFim: req.body.horaFim,
            pertenceProf: req.body.pertenceProf,
            pertenceMateria: req.body.pertenceMateria
        }
    );

    try {
        await horario.save()
        res.status(201).send(horario.toJSON())
    } catch (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar o horario.` })
    }
};

exports.getInicio = async function (req, res) {
    /*
    #swagger.tags = ['Horário']
    #swagger.description = 'Direciona a página inicial'
    */
    const result = await Horario.find().populate('pertenceProf').populate('pertenceMateria')
    if(result.length == 0){
        res.render('inicioVazio');
    }else{
        res.render('index', {horarios: result});
    }
    
};
