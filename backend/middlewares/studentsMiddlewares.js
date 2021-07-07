const studentModel = require('../models/student')


const isStudentExist = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const firstName = dataReceived.firstName
        const lastName = dataReceived.lastName
        
        const result = await studentModel.find( { firstName ,lastName })

        if (result.length > 0) {
            res.json("already exist")
        } else {
            next()
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { isStudentExist }