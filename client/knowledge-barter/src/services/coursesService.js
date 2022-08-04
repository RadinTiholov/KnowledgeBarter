import * as request from "./requester"
const baseUrl = 'http://localhost:3030'
const getAll = () => {
    return request.get(`${baseUrl}/course/all`)
}
const getHighest = () => {
    return request.get(`${baseUrl}/course/highest`)
}
const getDetails = (id) => {
    return request.get(`${baseUrl}/course/details/` + id)
}
export {
    getAll,
    getHighest,
    getDetails
}