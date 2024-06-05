const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let horarioSchema = new Schema({
    horaInicio:{
        type: Date, required: true
    },
    horaFim:{
        type: Date, required: true
    }
})

module.exports = mongoose.model('Horario', horarioSchema)