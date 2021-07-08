const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

require('dotenv').config();

const { MONSECRET } = process.env

const login = async (req, res) => {
    try {
        const admin = req.admin

        const result = bcryptjs.compareSync(req.body.password, admin.password)

        if (result) {
            const token = jwt.sign(
                {
                    id: admin._id
                }, MONSECRET,
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