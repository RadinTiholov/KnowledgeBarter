import * as request from "./requester"
const baseUrl = 'http://localhost:3030'
const getAll = () => {
    return request.get(`${baseUrl}/lesson/all`)
}
const getPopular = () => {
    return request.get(`${baseUrl}/lesson/popular`)
}
const getDetails = (id) => {
    return request.get(`${baseUrl}/lesson/details/` + id)
}
const create = (data) => {
    return request.post(`${baseUrl}/lesson/all`, data)
}

export {
    getAll,
    getPopular,
    getDetails,
    create
}