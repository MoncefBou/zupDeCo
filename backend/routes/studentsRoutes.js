const express = require('express');
const router = express.Router()

const { postStudentsByForm } = require('../controllers/studentsControllers')
const { isStudentExist, isSchoolExist, isParentExist, addSchoolLevelId, addAvailableId } = require('../middlewares/studentsMiddlewares')

router.post('/newForm', isStudentExist, isSchoolExist, isParentExist, addSchoolLevelId, addAvailableId, postStudentsByForm)

module.exports = { studentsRoutes : router}