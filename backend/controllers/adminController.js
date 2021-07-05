const { extractExcel } = require('../utils/extractExcel')
// const adminModel = require('../models/admin')

const uploadExcel = async (req, res) => {
    try {
        // const data = extractExcel.map(elem => elem)
        console.log('test', extractExcel)
        // console.log('test affichage', data)

        res.json({
            message: 'test ok',
            extractExcel
        })
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

// const getAllStudents = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log("Error: ", error)
//         res.status(500).json({ message: "There was an error while treating the request" })
//     }
// }


module.exports = { uploadExcel }