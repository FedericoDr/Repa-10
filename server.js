const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();


app.use(express.static(__dirname + '/public'))

app.use(express.json());

app.use("/", routes);

mongoose.connect('mongodb+srv://fede:fede1@cluster0.pimtent.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(3000, () => {
        console.log("Server abierto en el puerto 3000");
    });
})

module.exports = app;