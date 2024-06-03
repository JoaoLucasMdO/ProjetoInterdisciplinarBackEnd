let Professor = require('../models/professorModel')

exports.getProf = async function(req, res){
    try{
        const result = await Professor.find()
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.getProfId = async function(req, res){
    try{
        const result = await Professor.findById(req.params.id)
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }
}

exports.createProf = function (req, res) {
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