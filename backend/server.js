require('dotenv').config();

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const { PORT, MONGODB_URI } = process.env

const { volunteersRoutes } = require('./routes/volunteersRoutes')
const { adminRoutes } = require('./routes/adminRoutes')
const { studentsRoutes } = require('./routes/studentsRoutes')
const { authRoutes } = require('./routes/authRoutes')

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



app.use('/volunteers', volunteersRoutes)
app.use('/admin', adminRoutes)
app.use('/students', studentsRoutes)
app.use('/login', authRoutes)


// SERVER
app.listen(PORT, () => {
    console.log("Server is listening at port ", PORT);
})