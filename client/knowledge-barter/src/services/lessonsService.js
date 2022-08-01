import * as request from "./requester" 
const baseUrl = 'http://localhost:3030'
const getAll = () => {
    return request.get(`${baseUrl}/lessons/all`)
}