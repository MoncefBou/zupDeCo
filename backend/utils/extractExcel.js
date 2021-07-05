const readXlsxFile = require('read-excel-file/node')

const schema = {
  'signupDate': {
    prop: 'signupDate',
    type: Date
  },
  'Firstname': {
    prop: 'firstname',
    type: String,
    required: true
  },
  'Lastname': {
    prop: 'lastname',
    type: String,
    required: true
  },
  'Gender': {
    prop: 'gender',
    type: String,
    required: true
  },
  'SchoolLevel': {
    prop: 'schoolLevel',
    type: String,
    required: true
  },
  'Lesson': {
    prop: 'lesson',
    type: String,
    required: true
  },
  'Available': {
    prop: 'available',
    type: String,
    required: true,
  },
  'DateOfBirth': {
    prop: 'dateOfBirth',
    type: Date
  },
  'Email': {
    prop: 'email',
    type: String,
    required: true
  },
  'PhoneNumber': {
    prop: 'phoneNumber',
    type: Number,
    required: true
  }
}

const extractExcel = readXlsxFile("/home/lionel/Documents/konexio/zupDeCo/backend/HomeClasse tableau de suivi .xlsx", { schema })
  .then(({ rows, errors }) => {

    // console.log("rows: ", rows);
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
      elem.available = separateInArray

      console.log("elem: ", elem);

      return elem
    })
    // console.log("availableInSeconds : ", availableInSeconds);
  })

module.exports = { extractExcel }