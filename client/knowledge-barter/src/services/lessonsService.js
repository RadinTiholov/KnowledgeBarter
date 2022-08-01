import * as request from "./requester"
const baseUrl = 'http://localhost:3030'
const getAll = () => {
    return request.get(`${baseUrl}/lesson/all`)
}
const getHighestLessons = () => {
    return request.get(`${baseUrl}/lesson/highest`)
}

export {
    getAll,
    getHighestLessons
}