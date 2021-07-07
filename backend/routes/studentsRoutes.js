const express = require('express');
const router = express.Router()

const { postStudentsByForm } = require('../controllers/studentsControllers')
const { isStudentExist } = require('../middlewares/studentsMiddlewares')

router.post('/newForm', isStudentExist, postStudentsByForm)

module.exports = { studentsRoutes : router}