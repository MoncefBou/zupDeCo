const express = require('express');
const router = express.Router()

const { postStudentsByForm } = require('../controllers/studentsControllers')

router.post('/newForm', postStudentsByForm)

module.exports = { studentsRoutes : router}