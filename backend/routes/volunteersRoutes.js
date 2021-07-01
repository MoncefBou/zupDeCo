const express = require('express');

const studentModel = require('../models/student');
const lessonModel = require('../models/lesson')
const availableModel = require('../models/available')
const schoolLevelModel = require('../models/schoolLevel')

const router = express.Router()

// RECUPERE TOUT LES ELEVES SUIVANT LE GENRE DU TUTEUR
router.get('/', async (req, res) => {
    try {
        // TO DO : RECUPERER LE TOKEN EST SUIVANT LE GENRE DU TUTEUR LUI PROPOSER DES ÉLÈVES

        const lessons = ['Anglais', 'Maths'] || [/[A-za-z0–9_]/gm]
        const schoolLevel = ['5EME', 'TERM'] || [/[A-za-z0–9_]/gm]
        const available = ['Mardi 18h-20h', 'Vendredi 19h-20h', 'Samedi 14h30-19h']
        let availableInSeconds = []
        let hourInSecondOfBegin;
        let hourInSecondOfEnd;

        const convertAvailable = available.map((elem, index) => {
            const separateInArray = elem.split(" ")
            const separateHour = separateInArray[1].split("-")

            const hourOfBegin = separateHour[0].split("h")
            const hourOfEnd = separateHour[1].split("h")

            if (hourOfBegin[1] === "") {
                hourInSecondOfBegin = hourOfBegin[0] * 3600
            } else {
                hourInSecondOfBegin = (hourOfBegin[0] * 3600) + 1800
            }

            if (hourOfEnd[1] === "") {
                hourInSecondOfEnd = (hourOfEnd[0] * 3600) - 3600
            } else {
                hourInSecondOfEnd = (hourOfEnd[0] * 3600) + 1800 - 3600
            }

            while (hourInSecondOfBegin <= hourInSecondOfEnd) {
                const availability = { day: separateInArray[0], timeBegin: hourInSecondOfBegin }
                availableInSeconds.push(availability)
                hourInSecondOfBegin = hourInSecondOfBegin + 1800
            }


        })

        console.log('availableInSeconds :', availableInSeconds);

        // const test = await studentModel.find().populate("lesson").match({firstName: "Robin"})

        const dataStudents = await studentModel.aggregate([
            {
                $lookup:
                {
                    from: 'lessons',
                    localField: 'lesson',
                    foreignField: '_id',
                    as: 'lesson'
                }
            },
            {
                $lookup:
                {
                    from: 'schoollevels',
                    localField: 'schoolLevel',
                    foreignField: '_id',
                    as: 'schoolLevel'
                }
            },
            {
                $lookup:
                {
                    from: 'availables',
                    localField: 'available',
                    foreignField: '_id',
                    as: 'available'
                }
            },
            {
                $unwind: {
                    path: "$available",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "days",
                    localField: "available.day",
                    foreignField: "_id",
                    as: "available.day",
                }
            },
            {
                $group: {
                    _id: "$_id",
                    firstName: { "$first": "$firstName" },
                    lastName: { "$first": "$lastName" },
                    gender: { "$first": "$gender" },
                    email: { "$first": "$email" },
                    phoneNumber: { "$first": "$phoneNumber" },
                    signupDate: { "$first": "$signupDate" },
                    lesson: { "$first": "$lesson" },
                    schoolLevel: { "$first": "$schoolLevel" },
                    available: { "$push": "$available" },
                }
            },
            {
                $match: { lesson: { $elemMatch: { name: { $in: lessons } } } }
            },
            {
                $match: { schoolLevel: { $elemMatch: { name: { $in: schoolLevel } } } }
            }
        ])

        console.log(dataStudents)

        const responseToSend = dataStudents.filter(elem => {

                const newArray = elem.available.filter(element => {
                    
                })
        })

        res.json(dataStudents)
        // res.json(test)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }

})


module.exports = { volunteersRoutes: router }