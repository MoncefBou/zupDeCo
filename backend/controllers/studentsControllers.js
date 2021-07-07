const studentModel = require('../models/student')
const schoolModel = require('../models/school')


const postStudentsByForm = async (req, res, next) => {
    try {
        const dataReceived = req.body
        const name = dataReceived.school.name
        const city = dataReceived.school.city

        const result = await schoolModel.find( { name ,city })

        if (result.length > 0) {
            dataReceived.school = result
        } else {
           const newSchool = await schoolModel.create({ name ,city })
           dataReceived.school = newSchool
        }
        
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { postStudentsByForm }

// {
//     "firstName": "Moncef",
//     "lastName": "Bou",
//     "gender": "H",
//     "dateOfBirth": "03/05/1992",
//     "schoolLevel": { "class": "6EME", "degree": "Collège"},
//     "available": [{"day": "Mardi", "timeBegin": 64800}, {"day": "Samedi", "timeBegin": 64800},{"day": "Mardi", "timeBegin": 66600}],
//     "email": "moncefbou@gmail.com",
//     "computer": true,
//     "school": {
//         "name": "Jean Vilar",
//         "city": "La Courneuve"
//     },
//     "parent": {
//         "grade": "père",
//         "firstName": "Papa",
//         "lastName": "Bou",
//         "email": "papabou@gmail.com",
//         "address": {
//             "street": "5 rue Claude Debussy",
//             "cp": "93120",
//             "city": "La Courneuve"
//         },
//         "phoneNumber": "0601020405"
//     },
//     "message": "Il est trop fort"
// }