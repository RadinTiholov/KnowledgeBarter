import { useContext, useState, useEffect } from "react"
import {AuthContext} from '../contexts/AuthContext'
import * as authService from '../services/authService'
export const useUserInfo = (id, isLesson) => {
    const [fullUserInfo, setfullUserInfo] = useState({})
    const {auth} = useContext(AuthContext);
    useEffect(() => {
        authService.getDetails(auth._id)
            .then(res => setfullUserInfo(res))
            .catch(err => alert(err))
    }, [])
    return [
        fullUserInfo, setfullUserInfo
    ]
}