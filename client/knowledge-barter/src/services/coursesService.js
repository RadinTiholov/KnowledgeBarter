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
const create = (data) => {
    return request.post(`${baseUrl}/course/all`, data)
}
export {
    getAll,
    getHighest,
    getDetails,
    create
}