const { check } = require('express-validator');
let Usuario = require('../models/usuarioModel')
let Professor = require('../models/professorModel')

exports.validaProfessor = function() {
    return [
        check('nome')
            .not().isEmpty().withMessage('O nome é obrigatório')
            .isLength({ min: 3 }).withMessage('O nome deve ter no mínimo 3 caracteres'),
        check('cpf')
            .not().isEmpty().withMessage('O CPF é obrigatório')
            .isNumeric().withMessage('O CPF deve conter apenas números')
            .isLength({ min: 11, max: 11 }).withMessage('O CPF deve ter 11 dígitos')
            .custom(async (cpf) => {
                if (parseInt(cpf, 10) <= 0) {
                    throw new Error('O CPF não pode ser negativo');
                }
                const professorExistente = await Professor.findOne({ cpf });
                if (professorExistente) {
                    throw new Error('Este CPF já está cadastrado');
                }
            }),
    ];
};

exports.validaAttProfessor = function() {
    return [
        check('nome')
            .not().isEmpty().withMessage('O nome é obrigatório')
            .isLength({ min: 3 }).withMessage('O nome deve ter no mínimo 3 caracteres'),
        check('cpf')
            .not().isEmpty().withMessage('O CPF é obrigatório')
            .isNumeric().withMessage('O CPF deve conter apenas números')
            .isLength({ min: 11, max: 11 }).withMessage('O CPF deve ter 11 dígitos')
            .custom(async (cpf) => {
                if (parseInt(cpf, 10) <= 0) {
                    throw new Error('O CPF não pode ser negativo');
                }
            }),
    ];
};

exports.validaHorario= function() {
    return [
        check('horaInicio').custom((value, { req }) => {
            const horaInicio = new Date(req.body.horaInicio);
            const horaFim = new Date(req.body.horaFim);
            
            if (horaInicio.getTime() > horaFim.getTime()) {
                throw new Error('O horário de entrada não pode ser maior que o de saída!');
            }
            return true
        })
    ];
};

exports.validaUsuario = function() {
    return [
        check('nome')
            .not().isEmpty().trim().withMessage('É obrigatório informar o nome')
            .isAlpha('pt-BR', { ignore: ' ' }).withMessage('Informe apenas texto no nome!')
            .isLength({ min: 3 }).withMessage('Informe no mínimo 3 caracteres')
            .isLength({ max: 100 }).withMessage('Informe no máximo 100 caracteres'),
        check('email')
            .not().isEmpty().trim().withMessage('É obrigatório informar o email')
            .isLowercase().withMessage('Não são permitidas letras maiúsculas')
            .isEmail().withMessage('Informe um email válido')
            .custom(async (value, { req }) => {
                const usuarioExistente = await Usuario.findOne({ email: value });
                if (usuarioExistente && !req.params.id) {
                    throw new Error(`O email ${value} já existe!`);
                }
            }),
        check('senha')
            .not().isEmpty().trim().withMessage('A senha é obrigatória')
            .isLength({ min: 6 }).withMessage('A senha deve ter no mínimo 6 caracteres')
            .isStrongPassword({
                minLength: 6,
                minLowercase: 1,
                minUppercase: 1,
                minSymbols: 1,
                minNumbers: 1
            }).withMessage('A senha não é segura. Informe no mínimo 1 caractere maiúsculo, 1 minúsculo, 1 número e 1 caractere especial'),
    ];
};

