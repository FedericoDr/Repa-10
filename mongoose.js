const mongoose = require('mongoose');
const gatosSchema = new mongoose.Schema({
    nombre: String,
    edad: mongoose.Schema.Types.Mixed,
    tipo: String,
    Caracteristicas: String
})
const Mascotas = mongoose.model('Mascotas', gatosSchema)
mongoose.connect('mongodb+srv://fede:fede1@cluster0.pimtent.mongodb.net/?retryWrites=true&w=majority').then(async () => {
    await Mascotas.create([
        {
            nombre: 'Salem',
            edad: 9,
            tipo: 'Gato',
            Caracteristicas: 'Muy tranquilo y ama dormir.'
        },
        {
            nombre: "Mateo",
            edad: 5,
            tipo: "Gato",
            Caracteristicas: "Le gusta comer budín"
        },
        {
            nombre: "Chuchi",
            edad: 4,
            tipo: "Gata",
            Caracteristicas: "Es muy peluda y tiene problemas sociales."
        },
        {
            nombre: "Neko",
            edad: 3,
            tipo: "Gato",
            Caracteristicas: "Te ama solo si le das de comer"
        },
        {
            nombre: "Mía",
            edad: 2,
            tipo: "Perra",
            Caracteristicas: "No le gustan los extraños"
        },
        {
            nombre: "Memi",
            edad: 1,
            tipo: "Gata",
            Caracteristicas: "Es muy chiquita y le gusta cantar"
        },
        {
            nombre: "Keyko",
            tipo: "Perra",
            edad: 0.6,
            Caracteristicas: "Le roba la comida a quién pueda"
        },
    ])

    await Mascotas.updateOne({ nombre: 'Salem' }, { nombre: 'SalemActua' })
    console.log("mostrando todo " + await Mascotas.find())
    console.log("mostrando solo los nombres " + await Mascotas.find({ edad: { $gte: 0 } }, { nombre: 1, _id: 0 }).exec())



})


