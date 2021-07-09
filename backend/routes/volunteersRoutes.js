const express = require('express');

const { getByAvailable, getByDegrees } = require('../controllers/volunteersControllers')

const router = express.Router()

router.post('/filter/available', getByAvailable)

router.get('/filter/schoolDegree', getByDegrees)

module.exports = { volunteersRoutes: router }