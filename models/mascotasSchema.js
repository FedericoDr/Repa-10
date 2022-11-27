const mongoose = require("mongoose");

const MascotasSchema = new mongoose.Schema({
    nombre: String,
    edad: mongoose.Schema.Types.Mixed,
    tipo: String,
    Caracteristicas: String
})
const Mascotas = mongoose.model('Mascotas', MascotasSchema)



module.exports = Mascotas;