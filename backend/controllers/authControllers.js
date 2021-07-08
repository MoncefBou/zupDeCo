const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config.js")

const login = async (req, res) => {
    try {
        const volunteer = req.volunteer

        const result = bcryptjs.compareSync(req.body.password, volunteer.password)

        if (result) {
            const token = jwt.sign(
                {
                    id: volunteer._id
                }, config.secret,
                {
                    expiresIn: 60 * 60
                })

            res.json({ message: "You're now logged in!", token })
        } else {
            res.status(401).json({ message: "Login failed" })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

module.exports = { login }