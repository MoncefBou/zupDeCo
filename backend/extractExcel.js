const readXlsxFile = require('read-excel-file/node')
require('dotenv').config();

const mongoose = require("mongoose")
const { PORT, MONGODB_URI } = process.env

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const schema = {
    'Date': {
      prop: 'date',
      type: Date
    },
    'NOM élève': {
      prop: 'nameOfStudents',
      type: String,
      required: true
    },
    'F H': {
      prop: 'gender',
      type: String,
      required: true
    },
    'classe 2020 21': {
      prop: 'schoolLevel',
      type: String,
      required: true
    },
    'DIsponibilités pour tutorat à distance': {
      prop: 'available',
      type: String,
      required: true,
    }
  }
  
  readXlsxFile("/home/lionel/Documents/konexio/zupDeCo/backend/HomeClasse tableau de suivi .xlsx", { schema })
    .then(({ rows, errors }) => {
  
      console.log("rows: ", rows);
      // console.log("rows.available: ", rows[0].available);
  
      let availableInSeconds = []
      let hourInSecondOfBegin;
      let hourInSecondOfEnd;
  
      const convertAvailable = rows.map((elem, index) => {
        const separateInArray = elem.available.split(' ')
        // console.log("separateInArray: ", separateInArray);
  
        const separateHour = separateInArray[1].split('-')
        // console.log("separateHour: ", separateHour);
  
        if (!separateHour[1]) {
          console.log(`${elem.nameOfStudents} n'a pas bien rentré ses disponibilités`);
          return
  
        } else {
  
          const hourOfBegin = separateHour[0].split('h')
          // console.log("hourOfBegin: ", hourOfBegin);
  
          const hourOfEnd = separateHour[1].split('h')
          // console.log("hourOfEnd: ", hourOfEnd);
  
          if (hourOfBegin[1] === '') {
            hourInSecondOfBegin = hourOfBegin[0] * 3600
          } else {
            hourInSecondOfBegin = (hourOfBegin[0] * 3600) + 1800
          }
          if (hourOfEnd[1] === '') {
            hourInSecondOfEnd = (hourOfEnd[0] * 3600) - 3600
          } else {
            hourInSecondOfEnd = (hourOfEnd[0] * 3600) + 1800 - 3600
          }
  
          while (hourInSecondOfBegin <= hourInSecondOfEnd) {
            const availability = { day: separateInArray[0], timeBegin: hourInSecondOfBegin }
            availableInSeconds.push(availability)
            hourInSecondOfBegin = hourInSecondOfBegin + 1800
          }
        }
  
        return elem
      })
      // console.log("convertAvailable: ", convertAvailable);
      // console.log("availableInSeconds : ", availableInSeconds);
    })