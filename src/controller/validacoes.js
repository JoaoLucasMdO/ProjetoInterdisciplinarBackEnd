const { check } = require('express-validator');
let db = require('mongodb')

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
                const professorExistente = await db.collection('professors').findOne({ cpf });
                if (professorExistente) {
                    throw new Error('Este CPF já está cadastrado');
                }
            }),
    ];
};

exports.validaUsuario = function() {
    return [
    check('nome')
    .not().isEmpty().trim().withMessage('É obrigatório informar o nome')
    .isAlpha('pt-BR', {ignore: ' '}).withMessage('Informe apenas texto')
    .isLength({min:3}).withMessage('informe no mínimo 3 caracteres')
    .isLength({max: 100}).withMessage('Informe no máximo 100 caracteres'),
    check('email')
    .not().isEmpty().trim().withMessage('É obrigatório informar o email')
    .isLowercase().withMessage('Não são permitidas letras maiúsculas')
    .isEmail().withMessage('Informe um email válido')
    .custom((value, {req}) => {
        return db.collection(Usuario)
        .find({email: {$eq: value}}).toArray()
        .then((email) => {
            //Verifica se não existe o ID para garantir que é inclusão
            if(email.length && !req.params.id){
                return Promise.reject(`O email ${value} já existe!`)
            }
        })
    }),
    check('senha')
    .not().isEmpty().trim().withMessage('A senha é obrigatória')
    .isLength({min:6}).withMessage('A senha deve ter no mínimo 6 caracteres')
    .isStrongPassword({
        minLength: 6,
        minLowercase: 1, minUppercase: 1,
        minSymbols: 1, minNumbers: 1
    }).withMessage('A senha não é segura. Informe no mínimo 1 caractere maiúsculo, 1 minúsculo, 1 número e 1 caractere especial'),
]
}