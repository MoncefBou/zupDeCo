const axios = require('axios')

const isCityExist = async (req, res) => {
    try {
        const url = " https://geo.api.gouv.fr/communes"

        const response = await axios.get(url)
        const allCity = response.data

        const newArray = await allCity.map(elem => {
            return { city: elem.nom, codePostaux: elem.codesPostaux }
        })

        res.json(newArray)
        // await cityModel.create({ city: allCity[0].nom, codePostaux: allCity[0].codePostaux })

        //    await allCity.forEach(async element => {
        //         try {
        //             await cityModel.create({ city: element.nom, codePostaux: element.codePostaux })
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     });

        // await cityModel.insertMany(allCity)
        // if (cityFound === city.toLowerCase()) {
        //     console.log('ok');
        // } else {
        //     console.log('faux');
        // }

    } catch (error) {
        console.log(error);
    }
}

module.exports = { isCityExist }