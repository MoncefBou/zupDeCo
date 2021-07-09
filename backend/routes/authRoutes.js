const express = require("express")
const router = express.Router()
const { login } = require("../controllers/authControllers")
const { validationLogin } = require("../middlewares/validationsMiddlewares")
const { continueIfVolunteerExists } = require("../middlewares/authMiddlewares")

router.post("/login", validationLogin, continueIfVolunteerExists, login)

module.exports = { authRoutes : router}