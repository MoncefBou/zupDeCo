const studentModel = require('../models/student')
const schoolModel = require('../models/school')
const parentModel = require('../models/parent')
const schoolLevelModel = require('../models/schoolLevel')
const availableModel = require('../models/available')
const dayModel = require('../models/day')



const isStudentExist = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const firstName = dataReceived.firstName
        const lastName = dataReceived.lastName

        const result = await studentModel.find({ firstName, lastName })

        if (result) {
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

        const result = await schoolModel.findOne({ name, city })

        if (result) {
            req.body.school = result._id
            next()
        } else {
            const schoolToAdd = await schoolModel.create({ name, city })
            req.body.school = schoolToAdd._id
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

        if (result) {
            req.body.parent = result._id
            next()
        } else {
            const parentToAdd = await parentModel.create(parent)
            req.body.parent = parentToAdd._id
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

        req.body.schoolLevel = result._id
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
                $lookup: {
                    from: "days",
                    localField: "day",
                    foreignField: "_id",
                    as: "day",
                }
            },
            {
                $unwind: {
                    path: "$day",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                    _id: "$_id",
                    available: { $first: { day: "$day.name", timeBegin: "$timeBegin" } },
                }
            },
            {
                $match: { available: { $in: available } }
            },
            {
                $project: { available: 0}
            }
        ])

        req.body.available = result
        next()


    } catch (error) {
        console.log(error);
    }
}

module.exports = { isStudentExist, isSchoolExist, isParentExist, addSchoolLevelId, addAvailableId }