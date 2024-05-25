const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let professorSchema = new Schema({
    nome:{
        type: String, required: true, max:30
    },
    cursos:{
        type: Array, required: false
    },
    email:{
        type: String, required: true, max:30
    },
    senha:{
        type: String, required: true, max:30
    }
})

module.exports = mongoose.model('Professor', professorSchema)