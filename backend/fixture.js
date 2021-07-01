require('dotenv').config();

const mongoose = require("mongoose")
const { PORT, MONGODB_URI } = process.env

const volunteerModel = require('./models/volunteer')
const studentModel = require('./models/student');
const lessonModel = require('./models/lesson');
const schoolLevelModel = require('./models/schoolLevel');
const dayModel = require('./models/day');
const availableModel = require('./models/available');


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

const addlevelSchool = async (req, res) => {
    try {
        await schoolLevelModel.insertMany([
            {
                name: "CM1"
            },
            {
                name: "CM2"
            },
            {
                name: "6EME"
            },
            {
                name: "5EME"
            },
            {
                name: "4EME"
            },
            {
                name: "3EME"
            },
            {
                name: "2ND"
            },
            {
                name: "1ERE"
            },
            {
                name: "TERM"
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

        let startHour = 8 * 3600
        const endHour = (20 * 3600) - 3600
        const day = "60dc6910c84622165ce9b93c"
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
                schoolLevel: "60dc681368383015eaa9444b",
                available: ["60dc860c233ec71b21e6a234", "60dc860c233ec71b21e6a235"],
                lesson: ["60dc66ca57a73d156f3e0df4"],
                signupDate: new Date("2020-05-03"),
            },
            {
                firstName: "Starfire",
                lastName: "Titan",
                gender: "F",
                email: "starfiretitan@gmail.com",
                phoneNumber: 0610223040,
                schoolLevel: "60dc681368383015eaa9444a",
                available: ["60dc87288771261bbb666125", "60dc87b82909511bf02dd732"],
                lesson: ["60dc66ca57a73d156f3e0df7", "60dc66ca57a73d156f3e0df7"],
                signupDate: "2021-02-03",
            },
            {
                firstName: "Cyborg",
                lastName: "Stone",
                gender: "H",
                email: "cyborgtitan@gmail.com",
                phoneNumber: 0611223340,
                schoolLevel: "60dc681368383015eaa9444e",
                available: ["60dc87b82909511bf02dd732", "60dc87b82909511bf02dd73b", "60dc87b82909511bf02dd732"],
                lesson: ["60dc66ca57a73d156f3e0df8"],
                signupDate: "2021-01-29",
            },
            {
                firstName: "Raven",
                lastName: "Roth",
                gender: "F",
                email: "ravenroth@gmail.com",
                phoneNumber: 0611323340,
                schoolLevel: "60dc681368383015eaa9444f",
                available: ["60dc860c233ec71b21e6a235", "60dc87e3bc15cc1c13962347", "60dc87e3bc15cc1c13962354", "60dc87b82909511bf02dd732"],
                lesson: ["60dc66ca57a73d156f3e0df7", "60dc66ca57a73d156f3e0df6", "60dc66ca57a73d156f3e0df8"],
                signupDate: "2020-12-13",
            }
        ])

    } catch (error) {
        console.log(error);
    }
}

