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

        // ON FAIT UNE REQUETE À LA BDD EN LUI DEMANDANT D'AFFICHER TOUS LES ELEVES ET TOUTES LEURS INFOS' 
        const allStudents = await studentModel.find()
            .populate([
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

        res.json(allStudents)

    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

const getAllVolunteers = async (req, res) => {
    try {
        
        // ON FAIT UNE REQUETE À LA BDD EN LUI DEMANDANT D'AFFICHER TOUS LES BENEVOLES ET TOUTES LEURS INFOS' 
        const allVolunteers = await volunteerModel.find()
            .populate("student", { _id: 1 })
            .lean()

        res.json(allVolunteers)

    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

module.exports = { getAllStudents, getAllVolunteers }