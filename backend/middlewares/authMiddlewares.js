const volunteerModel = require("../models/volunteer")
const jwt = require("jsonwebtoken")
const config = require("../config.js")

const continueIfVolunteerExists = async (req, res, next) =>  {
    try {
        const email = req.body.email
        const volunteer = await volunteerModel.findOne({ email })

        if (volunteer) {
            req.volunteer = volunteer
            // Test PASSAGE ICI
            console.log("test 1: ", volunteer );
            next()
        } else {
            res.status(400).json({ errorMessage: "User was not found" })
        }

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const result = jwt.verify(token, config.secret)

        if (result.id) {
            const volunteer = await volunteerModel.findById(result.id).lean()

            req.volunteer = volunteer
            next()
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "You don't have access to this information" })
    }
}

const onlyAdmin = (req, res, next) => {
    if (req.volunteer && req.volunteer.role === 0) {
        next()
    } else {
        res.status(403).json({ message: "I know who you are but you are not allow to cross this border" })
    }
}

module.exports = { continueIfVolunteerExists, verifyToken, onlyAdmin }