require('dotenv').config();

const mongoose = require("mongoose")
const { PORT, MONGODB_URI } = process.env

const volunteerModel = require('./models/volunteer')
const studentModel = require('./models/student');
const lessonModel = require('./models/lesson');
const schoolLevelModel = require('./models/schoolLevel');
const dayModel = require('./models/day');
const availableModel = require('./models/available');
const schoolDegreeModel = require('./models/schoolDegree')


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

// POUR AJOUTER 2 VOLONTAIRES À LA BDD ET FAIRE LES TESTS
const addVolunteers = async (req, res) => {
    try {
        await volunteerModel.insertMany([
            {
                firstName: "Peter",
                lastName: "Parker",
                gender: "H",
                email: "peterparker@gmail.com",
                phoneNumber: 0601020304
            },
            {
                firstName: "Mary",
                lastName: "Jane",
                gender: "F",
                email: "maryjane@gmail.com",
                phoneNumber: 0610203040
            }
        ])

    } catch (error) {
        console.log(error);
    }
}

const addlessons = async (req, res) => {
    try {
        await lessonModel.insertMany([
            {
                name: "Maths"
            },
            {
                name: "Français"
            },
            {
                name: "Anglais"
            },
            {
                name: "Espagnol"
            },
            {
                name: "Histoire"
            },
        ])

    } catch (error) {
        console.log(error);
    }
}

const addSchoolDegree = () => {
    try {
        const degreeSchool = ["Primaire", "Collége", "Lycée"]

        degreeSchool.forEach(async element => {

            await schoolDegreeModel.create({ degree: element })

        });

    } catch (error) {
        console.log(error);
    }
}

const addlevelSchool = async () => {
    try {
        await schoolLevelModel.insertMany([
            {
                level: "CM1",
                schoolDegree: "60e33fe436584d3efac6e1fa"
            },
            {
                level: "CM2",
                schoolDegree: "60e33fe436584d3efac6e1fa"
            },
            {
                level: "6EME",
                schoolDegree: "60e33fe436584d3efac6e1fb"
            },
            {
                level: "5EME",
                schoolDegree: "60e33fe436584d3efac6e1fb"
            },
            {
                level: "4EME",
                schoolDegree: "60e33fe436584d3efac6e1fb"
            },
            {
                level: "3EME",
                schoolDegree: "60e33fe436584d3efac6e1fb"
            },
            {
                level: "2ND"
                ,
                schoolDegree: "60e33fe436584d3efac6e1fc"
            },
            {
                level: "1ERE",
                schoolDegree: "60e33fe436584d3efac6e1fc"
            },
            {
                level: "TERM",
                schoolDegree: "60e33fe436584d3efac6e1fc"
            },
        ])

    } catch (error) {
        console.log(error);
    }
}

const addDay = async (req, res) => {
    try {
        await dayModel.insertMany([
            {
                name: "Lundi"
            },
            {
                name: "Mardi"
            },
            {
                name: "Mercredi"
            },
            {
                name: "Jeudi"
            },
            {
                name: "Vendredi"
            },
            {
                name: "Samedi"
            }
        ])

    } catch (error) {
        console.log(error);
    }
}

const addAvailability = async (req, res) => {
    try {
        // storedTime = hours * 3600 + minutes * 60 + seconds

        // hours = storedTime / 3600 
        // leaves = storedTime - hours * 3600
        // minutes = leaves / 60
        // seconds = leaves - 60 * minutes

        let startHour = 18 * 3600
        const endHour = (20 * 3600) - 3600
        const day = "60dc6910c84622165ce9b937"
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

const addStudents = async (req, res) => {
    try {
        await studentModel.insertMany([
            {
                firstName: "Robin",
                lastName: "Titan",
                gender: "H",
                email: "robintitan@gmail.com",
                phoneNumber: 0622334455,
                schoolLevel: "60e340df680b843f64c90372",
                available: ["60e304473155e92ebf330545", "60e304473155e92ebf330546", "60e304473155e92ebf330547"],
                lesson: ["60dc66ca57a73d156f3e0df4"],
                signupDate: new Date("2020-05-03"),
            },
            {
                firstName: "Starfire",
                lastName: "Titan",
                gender: "F",
                email: "starfiretitan@gmail.com",
                phoneNumber: 0610223040,
                schoolLevel: "60e340df680b843f64c90371",
                available: ["60e304473155e92ebf330547", "60e304545d26822ed71cc471", "60e304545d26822ed71cc472"],
                lesson: ["60dc66ca57a73d156f3e0df7", "60dc66ca57a73d156f3e0df7"],
                signupDate: "2021-02-03",
            },
            {
                firstName: "Cyborg",
                lastName: "Stone",
                gender: "H",
                email: "cyborgtitan@gmail.com",
                phoneNumber: 0611223340,
                schoolLevel: "60e340df680b843f64c90370",
                available: ["60e30460616fcb2ef32fd373", "60e30479d280b72f115c3158", "60e30479d280b72f115c3159", "60e30479d280b72f115c315a"],
                lesson: ["60dc66ca57a73d156f3e0df8"],
                signupDate: "2021-01-29",
            },
            {
                firstName: "Raven",
                lastName: "Roth",
                gender: "F",
                email: "ravenroth@gmail.com",
                phoneNumber: 0611323340,
                schoolLevel: "60e340df680b843f64c9036c",
                available: ["60e30479d280b72f115c315a", "60e30479d280b72f115c315c", "60e30479d280b72f115c315d", "60e3048e77f05b2f2961e7d5"],
                lesson: ["60dc66ca57a73d156f3e0df7", "60dc66ca57a73d156f3e0df6", "60dc66ca57a73d156f3e0df8"],
                signupDate: "2020-12-13",
            }
        ])

    } catch (error) {
        console.log(error);
    }
}

addStudents()