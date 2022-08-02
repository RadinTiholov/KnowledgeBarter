import * as request from "./requester"
const baseUrl = 'http://localhost:3030'

const login = (data) => {
    return request.post(`${baseUrl}/auth/login`)
}
const register = (data) => {
    return request.post(`${baseUrl}/auth/register`)
}
const logout = () => {
    return request.get(`${baseUrl}/auth/logout`)
}
export{
    login,
    register,
    logout
}