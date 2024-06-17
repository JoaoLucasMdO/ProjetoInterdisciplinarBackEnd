const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let materiaSchema = new Schema({
    nome:{
        type: String, required: true, max:30
    }
})

module.exports = mongoose.model('Materia', materiaSchema)