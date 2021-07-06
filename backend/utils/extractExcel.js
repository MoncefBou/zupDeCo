const readXlsxFile = require('read-excel-file/node')
// const array = [];
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

// const extractExcel = readXlsxFile("/home/lionel/Documents/konexio/zupDeCo/backend/HomeClasse tableau de suivi .xlsx", { schema })
const extractExcel = async () => {
  const dataExcel = await readXlsxFile("/home/lionel/Documents/konexio/zupDeCo/backend/home-classe-test.xlsx", { schema })

  errorRows = []

  const validRows = dataExcel.rows.filter((elem, index) => {
    const separateAvailabilites = elem.available.split(',')

    const checkAvailabilites = separateAvailabilites.filter(availabilites => {
      const separateDayOfTime = availabilites.trim().split(' ')
      const separateTime = separateDayOfTime[1].split('-')

      if (!separateTime[1]) {
        return false
      }

      return true
    })

    if (separateAvailabilites.length !== checkAvailabilites.length) {
      errorRows.push({ row: index + 1, name: elem.firstname })
      return false
    }

    return true
  })

  console.log("errorRows", errorRows)

  const dataTransformed = validRows.map((elem, index) => {

    elem.available = convertAvailable(elem.available)

    return elem
  })

  return dataTransformed
}

const convertAvailable = (userAvailabilities) => {
  let hourInSecondOfBegin
  let hourInSecondOfEnd

  const separateAvailabilites = userAvailabilities.split(',')

  const availabilities = {}

  for (let i = 0; i < separateAvailabilites.length; i++) {
    const elem = separateAvailabilites[i];

    const separateDayOfTime = elem.trim().split(' ')

    const separateTime = separateDayOfTime[1].split('-')

    const hourOfBegin = separateTime[0].split('h')
    const hourOfEnd = separateTime[1].split('h')

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

      if (!availabilities.hasOwnProperty(separateDayOfTime[0])) {
        availabilities[separateDayOfTime[0]] = [hourInSecondOfBegin]
      } else {
        availabilities[separateDayOfTime[0]].push(hourInSecondOfBegin)
      }

      hourInSecondOfBegin = hourInSecondOfBegin + 1800
    }
  }

  return availabilities
}

module.exports = { extractExcel }