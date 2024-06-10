const { check } = require('express-validator');
const db = require('mongodb'); 

exports.validaProfessor = function() {
    return [
        check('name')
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
                const professorExistente = await db.collection('professores').findOne({ cpf });
                if (professorExistente) {
                    throw new Error('Este CPF já está cadastrado');
                }
            }),
    ];
};