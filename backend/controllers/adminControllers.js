require('dotenv').config();
const express = require('express')
const jwt = require('jsonwebtoken')
const { MONSECRET } = process.env

const studentModel = require('../models/student');
const volunteerModel = require('../models/volunteer');
const availableModel = require('../models/available');
const dayModel = require('../models/day');
const schoolLevelModel = require('../models/schoolLevel');
const schoolDegreeModel = require('../models/schoolDegree');

const mongoose = require("mongoose");


const getAllStudents = async (req, res) => {
    try {

        const token = req.headers.authorization.split(" ")[1]
        const result = jwt.verify(token, MONSECRET)
        if (!result) {
            return res.status(401).json("Access unauthorized")
        }
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

        res.status(200).json(allStudents)

    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            res.status(401).json({ message: "token expired" })
        } else {
            res.status(500).json({ message: "error sorry", error })
        }
    }
}


const getAllVolunteers = async (req, res) => {
    try {

        const token = req.headers.authorization.split(" ")[1]
        const result = jwt.verify(token, MONSECRET)
        if (!result) {
            return res.status(401).json("Access unauthorized")
        }

        // ON FAIT UNE REQUETE À LA BDD EN LUI DEMANDANT D'AFFICHER TOUS LES BENEVOLES ET TOUTES LEURS INFOS' 
        const allVolunteers = await volunteerModel.find({ role: 0})
            .populate("student", { _id: 1 })
            .lean()

        res.json(allVolunteers)

    } catch (error) {
        console.log(error);
        res.status(500).json({ "err": error })
    }
}

module.exports = { getAllStudents, getAllVolunteers }