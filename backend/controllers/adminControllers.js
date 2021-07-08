const express = require('express')

const studentModel = require('../models/student');
const volunteerModel = require('../models/volunteer');
const availableModel = require('../models/available');
const dayModel = require('../models/day');
const schoolLevelModel = require('../models/schoolLevel');
const schoolDegreeModel = require('../models/schoolDegree');

const mongoose = require("mongoose");


const getAllStudents = async (req, res) => {
    try {

        const allStudents = await studentModel.find().populate([
            {
                path: "available",
                model: availableModel,
                select: "timeBegin",
                populate: {
                    path: "day",
                    model: dayModel,
                    select: "name"
                }
            },
            {
                path: "schoolLevel",
                model: schoolLevelModel,
                select: ["level", "schoolDegree"],
                populate: {
                    path: "schoolDegree",
                    model: schoolDegreeModel,
                    select: "degree"
                }
            }
        ]).lean()

        // ON FAIT UNE REQUETE À LA BDD EN LUI DEMANDANT DE MATCHER AVEC LES ELEVES QUI ONT LES MÊMES DISPO 
        // const allStudents = await studentModel.aggregate([
        //     {
        //         $lookup:
        //         {
        //             from: 'availables',
        //             localField: 'available',
        //             foreignField: '_id',
        //             as: 'available'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$available",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: "days",
        //             localField: "available.day",
        //             foreignField: "_id",
        //             as: "available.day",
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$available.day",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $lookup:
        //         {
        //             from: 'schoollevels',
        //             localField: 'schoolLevel',
        //             foreignField: '_id',
        //             as: 'schoolLevel'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$schoolLevel",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $lookup:
        //         {
        //             from: 'schooldegrees',
        //             localField: 'schoolLevel.schoolDegree',
        //             foreignField: '_id',
        //             as: 'schoolLevel.schoolDegree'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$schoolLevel.schoolDegree",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: "$_id",
        //             firstName: { "$first": "$firstName" },
        //             lastName: { "$first": "$lastName" },
        //             gender: { "$first": "$gender" },
        //             signupDate: { "$first": "$signupDate" },
        //             schoolLevel: { $first: { class: "$schoolLevel.level", degree: "$schoolLevel.schoolDegree.degree" } },
        //             available: { $push: { day: "$available.day.name", timeBegin: "$available.timeBegin" } },
        //         }
        //     },
        // ])

        res.json(allStudents)

    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

const getAllVolunteers = async (req, res) => {
    try {

        const allVolunteers = await volunteerModel.find().populate("student", {_id:1}).lean()

        // const allVolunteers = await volunteerModel.aggregate([
        //     {
        //         $lookup:
        //         {
        //             from: 'availables',
        //             localField: 'available',
        //             foreignField: '_id',
        //             as: 'available'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$available",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: "days",
        //             localField: "available.day",
        //             foreignField: "_id",
        //             as: "available.day",
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$available.day",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $lookup:
        //         {
        //             from: 'schoollevels',
        //             localField: 'schoolLevel',
        //             foreignField: '_id',
        //             as: 'schoolLevel'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$schoolLevel",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $lookup:
        //         {
        //             from: 'schooldegrees',
        //             localField: 'schoolLevel.schoolDegree',
        //             foreignField: '_id',
        //             as: 'schoolLevel.schoolDegree'
        //         }
        //     },
        //     {
        //         $unwind: {
        //             path: "$schoolLevel.schoolDegree",
        //             preserveNullAndEmptyArrays: true
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: "$_id",
        //             firstName: { "$first": "$firstName" },
        //             lastName: { "$first": "$lastName" },
        //             gender: { "$first": "$gender" },
        //             email: { "$first": "$email" },
        //             phoneNumber: { "$first": "$phoneNumber"},

        //         }
        //     },
        // ])

        res.json(allVolunteers)

    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

module.exports = { getAllStudents, getAllVolunteers }