const express = require("express")
const router = express.Router()
const { login } = require("../controllers/authControllers")
const { validationLogin } = require("../middlewares/validationsMiddlewares")
// const { continueIfUserExists } = require("../middlewares/authMiddlewares")

router.post("/", validationLogin, login) , //continueIfUserExists,

module.exports = { authRoutes : router}