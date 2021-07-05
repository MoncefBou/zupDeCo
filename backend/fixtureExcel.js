const mongoose = require('mongoose')
const extractExcel = require('./utils/extractExcel')
// creer le modele correspondant à la fixture
// importer ici le modele en question
// connecter à la dbd
//insertion (insertmany)
const studentModel = require('./models/student');
const lessonModel = require('./models/lesson');
const schoolLevelModel = require('./models/schoolLevel');
const SchoolDegreeModel = require('./models/schoolDegree');
const dayModel = require('./models/day');
const availableModel = require('./models/available');

mongoose.connect("mongodb://localhost:27017/ZupDeCo", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const AddSchoolDegree = async (req, res) => {
    try {
        SchoolDegreeModel.deleteMany({})
        await SchoolDegreeModel.insertMany([
            {
                degree: "Primaire"
            },
            {
                degree: "College"
            },
            {
                degree: "Lycee"
            }
        ])
    } catch (error) {
        console.log(error);
    }
}
// AddSchoolDegree()

const addlessons = async (req, res) => {
    try {
        lessonModel.deleteMany({})
        await lessonModel.insertMany([
            {
                lesson: "Français"
            },
            {
                lesson: "Mathématique"
            },
            {
                lesson: "Histoire/Géographie"
            },
            {
                lesson: "Anglais"
            },
            {
                lesson: "Sciences(svt/physique-chimie)"
            },
            {
                lesson: "Autres Matières"
            }
        ])
    } catch (error) {
        console.log(error);
    }
}
// addlessons()

const addLevelSchool = async (req, res) => {
    try {
        schoolLevelModel.deleteMany({})
        await schoolLevelModel.insertMany([
            {
                level: "CM1",
                schoolDegree: "60e32313333ed76326bca44a"
            },
            {
                level: "CM2",
                schoolDegree: "60e32313333ed76326bca44a"
            },
            {
                level: "6EME",
                schoolDegree: "60e32313333ed76326bca44b"
            },
            {
                level: "5EME",
                schoolDegree: "60e32313333ed76326bca44b"
            },
            {
                level: "4EME",
                schoolDegree: "60e32313333ed76326bca44b"
            },
            {
                level: "3EME",
                schoolDegree: "60e32313333ed76326bca44b"
            },
            {
                level: "2ND",
                schoolDegree: "60e32313333ed76326bca44c"
            },
            {
                level: "1ERE",
                schoolDegree: "60e32313333ed76326bca44c"
            },
            {
                level: "TERM",
                schoolDegree: "60e32313333ed76326bca44c"
            },
        ])
    } catch (error) {
        console.log(error);
    }
}
// addLevelSchool()

const addDay = async (req, res) => {
    try {
        dayModel.deleteMany({})
        await dayModel.insertMany([
            {
                day: "Lundi"
            },
            {
                day: "Mardi"
            },
            {
                day: "Mercredi"
            },
            {
                day: "Jeudi"
            },
            {
                day: "Vendredi"
            },
            {
                day: "Samedi"
            }
        ])
    } catch (error) {
        console.log(error);
    }
}
// addDay()

const addAvailability = async (req, res) => {
    try {
        // storedTime = hours * 3600 + minutes * 60 + seconds

        // hours = storedTime / 3600 
        // leaves = storedTime - hours * 3600
        // minutes = leaves / 60
        // seconds = leaves - 60 * minutes

        // ordre pour les ID ... lundi x3, Mardi x3, Jeudi x3, vendredi x3, mercredi x11, samedi x23
        let startHour = 8 * 3600
        const endHour = (20 * 3600) - 3600
        const day = "60e32313333ed76326bca458"
        const arrayOfDocument = []

        while (startHour <= endHour) {
            const objectDocument = {
                day: day,
                timeBegin: startHour
            }
            arrayOfDocument.push(objectDocument)
            startHour = startHour + 1800
        }

        await availableModel.insertMany(arrayOfDocument)

    } catch (error) {
        console.log(error);
    }
}
// addAvailability()

const addStudent = async (req, res) => {
    try {
        studentModel.deleteMany({})

        extractExcel.map((elem) => {
         
                 studentModel.insertMany({

                signupDate: elem.signupDate,
                firstName: elem.firstName,
                lastName: elem.lastName,
                gender: elem.gender,
                schoolLevel: elem.schoolLevel,
                lesson: [elem.lesson],
                available: [elem.available],
                dateOfBirth: elem.dateOfBirth,
                email: elem.email,
                phoneNumber: elem.phoneNumber,
                // address: {
                //     street: ,
                //     city: ,
                // },
                // school: {

                // },

                // message: { type: String, require: true }
            })
    })
} catch (error) {
    console.log(error);
}
}
addStudent()
// console.log(extractExcel)