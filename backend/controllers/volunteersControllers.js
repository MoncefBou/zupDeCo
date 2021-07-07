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
                $group: {
                    _id: "$_id",
                    gender: { "$first": "$gender" },
                    signupDate: { "$first": "$signupDate" },
                    schoolLevel: { $first:{ class: "$schoolLevel.level", degree: "$schoolLevel.schoolDegree.degree" } },
                    available: { $push: { day: "$available.day.name", timeBegin: "$available.timeBegin" } },
                }
            },
            {
                $match: { available: { $in: dataAvailable } }
            },
        ])

        res.json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

const getByDegrees = async (req, res) => {
    try {

        const schoolDegreeChoose = req.body.schoolDegree

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
                $group: {
                    _id: "$_id",
                    gender: { "$first": "$gender" },
                    signupDate: { "$first": "$signupDate" },
                    schoolLevel: { $first:{ class: "$schoolLevel.level", degree: "$schoolLevel.schoolDegree.degree" } },
                    available: { $push: { day: "$available.day.name", timeBegin: "$available.timeBegin" } },
                }
            },
            {
                $match: { "schoolLevel.degree": { $in: schoolDegreeChoose } }
            },
        ])

        res.json(response)

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getByAvailable, getByDegrees }