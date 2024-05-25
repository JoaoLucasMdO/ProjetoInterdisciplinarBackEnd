let Usuario = require('../models/usuarioModel')

exports.criar = function (req, res) {
    /*
       #swagger.tags = ['Usuario']
       #swagger.description = 'Insere um novo usuário'
       */
   let usuario = new Usuario(
       {
           name: req.body.name,
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