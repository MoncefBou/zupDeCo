require('dotenv').config();

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const { PORT, MONGODB_URI } = process.env;

// il manque l'import pour les routes

const { debug } = require("./middlewares/debug")

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
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

// SERVER
app.listen(PORT, () => {
    console.log("Server is listening at port ", PORT);
})