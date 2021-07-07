const express = require('express');
const router = express.Router()

const { getAllStudents, getAllVolunteers } = require('../controllers/adminControllers')


// router.post('/excel', (req, res) => {

// })

router.get('/students', getAllStudents, (req, res) => {

})

router.get('/volunteers', getAllVolunteers, (req, res) => {

})

module.exports = { adminRoutes : router}