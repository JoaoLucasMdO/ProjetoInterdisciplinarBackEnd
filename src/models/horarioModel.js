const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let horarioSchema = new Schema({
    horaInicio:{
        type: Date, required: true
    },
    horaFim:{
        type: Date, required: true
    },
    pertenceProf:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Professor',
        required: true,
    },
    pertenceMateria:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Materia',
        required: true,
    }
})

module.exports = mongoose.model('Horario', horarioSchema)