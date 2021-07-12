const express = require('express');

const { getByAvailable, getByDegrees } = require('../controllers/volunteersControllers')
const { verifyToken } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.post('/filter/available', getByAvailable)

router.post('/filter/schoolDegree', getByDegrees)

module.exports = { volunteersRoutes: router }