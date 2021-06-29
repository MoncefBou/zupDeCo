const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const { port, mongoURL } = require('./config.js')

// il manque l'import pour les routes

const { debug } = require("./middlewares/debug")


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const app = express()

app.use(cors())

app.use(express.json())

app.use(debug)

// Il manque les app.use pour les routes

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})