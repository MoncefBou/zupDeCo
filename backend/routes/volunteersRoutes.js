const express = require('express');

const { getByAvailable, getByDegreesInSecond, getByLessonInFinal } = require('../controllers/volunteersControllers')

const router = express.Router()


router.get('/filter/available', getByAvailable)

router.get('/filter/schoolDegree', getByDegreesInSecond)

router.get('/filter/lesson', getByLessonInFinal)



module.exports = { volunteersRoutes: router }