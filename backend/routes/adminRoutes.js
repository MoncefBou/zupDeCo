const express = require('express');
const router = express.Router()

const { getAllStudents, getAllVolunteers } = require('../controllers/adminControllers')

// router.post('/excel')

router.get('/students', getAllStudents)

router.get('/volunteers', getAllVolunteers)

module.exports = { adminRoutes : router}