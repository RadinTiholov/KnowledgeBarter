import * as request from "./requester"
const baseUrl = 'http://localhost:3030'
const getAll = () => {
    return request.get(`${baseUrl}/course/all`)
}
const getMostPopular = () => {
    return request.get(`${baseUrl}/course/popular`)
}

export {
    getAll,
    getMostPopular
}