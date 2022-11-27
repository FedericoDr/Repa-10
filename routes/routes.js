const express = require("express");
const Mascotas = require("../models/mascotasSchema");
const router = express.Router();
const path = require('path')
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.post("/crear", async (req, res) => {
    const Agregar = await Mascotas.create(req.body)
    console.log({ body: req.body })
    res.json(Agregar + "se agrego uno nuevo")
    console.log(req.body)
})

router.get("/buscar", async (require, res) => {
    const MascotasGuardado = await Mascotas.find()
    res.json(MascotasGuardado)
});

router.delete("/delete", async (req, res) => {
    const eliminar = await Mascotas.deleteOne({ "nombre": req.body.nombre })
    res.json('Eliminando')
    console.log('Eliminando =>', eliminar)
})

router.put("/update", async (req, res) => {
    const Actualizar = await Mascotas.updateOne({ "nombre": req.body.nombre }, { $set: req.body })
    res.json("funcionando")
    console.log('actualizando', Actualizar)
})

module.exports = router