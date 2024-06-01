let Professor = require('../models/professorModel')

exports.create = function (req, res) {
    /*
    #swagger.tags = ['Professor']
    #swagger.description = 'Insere um novo professor'
    */
    let professor = new Professor(
        {
            nome: req.body.nome,
            cursos: req.body.cursos
        }
    );

    professor.save()
        .then(res.status(201).send(professor.toJSON()))
        .catch((err) => {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar o professor.` })
        })

};