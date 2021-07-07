const studentModel = require('../models/student')
const schoolModel = require('../models/school')
const parentModel = require('../models/parent')
const schoolLevelModel = require('../models/schoolLevel')
const availableModel = require('../models/available')



const isStudentExist = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const firstName = dataReceived.firstName
        const lastName = dataReceived.lastName

        const result = await studentModel.find({ firstName, lastName })

        if (result.length > 0) {
            res.json("already exist")
        } else {
            next()
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const isSchoolExist = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const name = dataReceived.school.name
        const city = dataReceived.school.city

        const result = await schoolModel.find({ name, city })

        if (result.length > 0) {
            req.body.school = result
            next()
        } else {
            const schoolToAdd = await schoolModel.create({ name, city })
            req.body.school = schoolToAdd
            next()
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

const isParentExist = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const parent = dataReceived.parent
        const email = parent.email
        const firstName = parent.firstName
        const lastName = parent.lastName

        const result = await parentModel.find({ email, firstName, lastName })

        if (result.length > 0) {
            req.body.parent = result
            next()
        } else {
            const parentToAdd = await parentModel.create(parent)
            req.body.parent = parentToAdd
            next()
        }

    } catch (error) {
        console.log(error);
    }
}

const addSchoolLevelId = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const level = dataReceived.schoolLevel

        const result = await schoolLevelModel.findOne({ level })

        req.body.schoolLevel = result
        next()

    } catch (error) {
        console.log(error);
    }
}

const addAvailableId = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const available = dataReceived.available

        const result = await availableModel.aggregate([
            {
                $project : {  }
            },
            {
                $match : { $in: available }
            }
        ])

        res.json("salut")
        // req.body.schoolLevel = result
        // next()

    } catch (error) {
        console.log(error);
    }
}

module.exports = { isStudentExist, isSchoolExist, isParentExist, addSchoolLevelId, addAvailableId }