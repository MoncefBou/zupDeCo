import axios from 'axios'

const API_URL = "http://localhost:8000/"

export const postLogin = async (body) => {
    try {
        const response = await axios.post(API_URL + "login/login", body)

        console.log("c'est quoi response: ", response.data);

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}