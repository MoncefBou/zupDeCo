const express = require('express')

const studentModel = require('../models/student');
const lessonModel = require('../models/lesson')
const availableModel = require('../models/available')
const schoolLevelModel = require('../models/schoolLevel')
const dayModel = require('../models/day')
const schoolDegreeModel = require('../models/schoolDegree')

const mongoose = require("mongoose");


// --- TO DO : QUAND LE LOGIN SERA FAIT, FAIRE UNE VALIDATION PAR TOKEN 
// ET VERIFIER SI C'EST UN HOMME OU UNE FEMME
// --- TODO : RAJOUTER LES STATUS DES JSON
const getByAvailable = async (req, res) => {
    try {
        const dataAvailable = req.body.available


        // ON FAIT UNE REQUETE À LA BDD EN LUI DEMANDANT DE MATCHER AVEC LES ELEVES QUI ONT LES MÊMES DISPO 
        const response = await studentModel.aggregate([
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
                $unwind: {
                    path: "$available.day",
                    preserveNullAndEmptyArrays: true
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
                    available: { $push: { day: "$available.day.name", timeBegin: "$available.timeBegin" } },
                }
            },
            {
                $match: { available: { $in: dataAvailable } }
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
        ])

        // RÉCUPERER LES ID À ENVOYER AU FRONT
        const idFilter = response.map(elem => elem._id)

        // RÉCUPERER LES NIVEAUX DISPO SANS QU'ILS SOIENT RÉPÉTÉS
        const allSchoolLevel = response.map(elem => elem.schoolLevel[0].name)
        const schoolLevelAvailable = [];

        allSchoolLevel.forEach(elem => {

            if (schoolLevelAvailable[elem] === undefined) {
                schoolLevelAvailable.push(elem)
            }
        });


        res.json({ id: idFilter, schoolLevel: schoolLevelAvailable })

    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

const getByDegreesInSecond = async (req, res) => {
    try {

        const idAlreadyFilter = req.body.id

        // ON DOIT CONVERTIR LES ID EN OBJECTID POUR FAIRE LA RECHERCHE AVEC AGGREGATE
        const idToUse = idAlreadyFilter.map(elem => mongoose.Types.ObjectId(elem))

        const schoolDegreeChoose = req.body.schoolDegree

        // ----- TODO : LOOK UP SUR LE NIVEAU POUR POUVOIR FILTRER AVEC LE NIVEAU
        const response = await studentModel.aggregate([
            {
                $match: { _id: { $in: idToUse } }
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
                $unwind: {
                    path: "$schoolLevel",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup:
                {
                    from: 'schooldegrees',
                    localField: 'schoolLevel.schoolDegree',
                    foreignField: '_id',
                    as: 'schoolLevel.schoolDegree'
                }
            },
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
                $unwind: {
                    path: "$schoolLevel.schoolDegree",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: { "schoolLevel.schoolDegree.degree": { $in: schoolDegreeChoose } }
            },
            {
                $project: { _id: 1, lesson: 1, }
            }
        ])

        const idFilter = response.map(elem => elem._id)

        // RÉCUPERER LES MATIÉRES SANS QU'ELLES SOIENT RÉPÉTÉES
        const allLessons = [];

        response.forEach((element) => {
            const Lessons = element.lesson.map(elem => elem.name)

            allLessons.push(...Lessons)
        });

        const lessonsAvailable = [];
        allLessons.forEach(elem => {

            if (lessonsAvailable[elem] === undefined) {
                lessonsAvailable.push(elem)
            }
        });

        res.json({ lessons: lessonsAvailable, id: idFilter })

    } catch (error) {
        res.status(500).json(error)
    }
}

const getByLessonInFinal = async (req, res) => {
    try {

        const idAlreadyFilter = req.body.id
        // ON DOIT CONVERTIR LES ID EN OBJECTID POUR FAIRE LA RECHERCHE AVEC AGGREGATE
        const idToUse = idAlreadyFilter.map(elem => mongoose.Types.ObjectId(elem))
        const lessonsChoose = req.body.lesson

        const response = await studentModel.aggregate([
            {
                $match: { _id: { $in: idToUse } }
            },
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
                $match: { lesson: { $elemMatch: { name: { $in: lessonsChoose } } } }
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
                $unwind: {
                    path: "$schoolLevel",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup:
                {
                    from: 'schooldegrees',
                    localField: 'schoolLevel.schoolDegree',
                    foreignField: '_id',
                    as: 'schoolLevel.schoolDegree'
                }
            },
            {
                $unwind: {
                    path: "$schoolLevel.schoolDegree",
                    preserveNullAndEmptyArrays: true
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
                $unwind: {
                    path: "$available.day",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                    _id: "$_id",
                    lesson: { "$first": "$lesson.name" },
                    available: { $push: { day: "$available.day.name", timeBegin: "$available.timeBegin" } },
                    schoolDegree: { "$first": "$schoolLevel.schoolDegree.degree" }


                }
            }
            // {
            //     $project: { _id: 1, lesson: 1, "schoolLevel.schoolDegree.degree": 1 }
            // }
        ])


        res.json(response)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getByAvailable, getByDegreesInSecond, getByLessonInFinal }