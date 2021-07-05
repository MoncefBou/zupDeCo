const express = require('express');
const router = express.Router()
const { uploadExcel, getAllStudents,getAllVolunteers } = require('../controllers/adminController')

router.post('/excel', uploadExcel)

// router.get('/allStudents', getAllStudents)

// router.get('/allVolunteers', getAllVolunteers)

module.exports = { adminRoutes : router}