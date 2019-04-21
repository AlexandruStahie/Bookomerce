import { Get } from './axiosConfig'


function LoginUser(email, password) {
    const url = `User/Login/${email}/${password}`

    const axiosResponse = Get(url).then(response => {
        const { data } = response
        if (data === null || data === "") {
            return null;
        } else {
            return data
        }
    })

    return axiosResponse;
}

export { LoginUser }