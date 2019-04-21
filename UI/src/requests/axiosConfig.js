import axios from 'axios'

const defaultURL = 'https://localhost:44304/api/'
const config = {
    // headers: { "Access-Control-Allow-Origin": "*" }
}

function Get(url) {
    const requestURL = `${defaultURL}${url}`

    return axios.get(requestURL, config)
        .then(response => {
            console.log('axios response: ', response)
            return response
        })
        .catch(error => {
            console.log('axios error: ', error);
            return error
        })
}

export { Get }