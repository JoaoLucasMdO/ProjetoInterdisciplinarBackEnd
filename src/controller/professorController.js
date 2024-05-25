let Professor = require('../models/professorModel')

exports.criar = function (req, res) {
    /*
       #swagger.tags = ['Professor']
       #swagger.description = 'Insere um novo usuário'
       */
   let usuario = new Usuario(
       {
           nome: req.body.nome,
           cursos: req.body.cursos,
           email: req.body.email,
           senha: req.body.senha
       }
   );

   usuario.save()
       .then(res.status(201).send(user.toJSON()))
       .catch((err) => {
           res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
       })
};