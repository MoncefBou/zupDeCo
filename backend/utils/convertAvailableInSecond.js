const convertAvailableInSecond = (available) => {
    let availableInSeconds = []
    let hourInSecondOfBegin;
    let hourInSecondOfEnd;

    const convertAvailable = available.map((elem, index) => {
        const separateInArray = elem.split(" ")
        const separateHour = separateInArray[1].split("-")

        const hourOfBegin = separateHour[0].split("h")
        const hourOfEnd = separateHour[1].split("h")

        if (hourOfBegin[1] === "") {
            hourInSecondOfBegin = hourOfBegin[0] * 3600
        } else {
            hourInSecondOfBegin = (hourOfBegin[0] * 3600) + 1800
        }

        if (hourOfEnd[1] === "") {
            hourInSecondOfEnd = (hourOfEnd[0] * 3600) - 3600
        } else {
            hourInSecondOfEnd = (hourOfEnd[0] * 3600) + 1800 - 3600
        }

        while (hourInSecondOfBegin <= hourInSecondOfEnd) {
            const availability = { day: separateInArray[0], timeBegin: hourInSecondOfBegin }
            availableInSeconds.push(availability)
            hourInSecondOfBegin = hourInSecondOfBegin + 1800
        }


    })

    return availableInSeconds
}

module.exports = convertAvailableInSecond