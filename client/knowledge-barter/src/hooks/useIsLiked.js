import { useContext, useState, useEffect } from "react"
import {AuthContext} from '../contexts/AuthContext'
import * as authService from '../services/authService'
export const useIsLiked = (id) => {
    const [fullUserInfo, setfullUserInfo] = useState({})
    const [isLiked, setIsLiked] = useState(false);
    const {auth} = useContext(AuthContext);
    useEffect(() => {
        authService.getDetails(auth._id)
            .then(res => {
                setfullUserInfo(res)
                if (res.likedLessons.some(x => x === id)) {
                    setIsLiked(true)
                }else{
                    setIsLiked(false)
                }
            })
            .catch(err => alert(err))
    }, [])
    
    return [
        isLiked, setIsLiked
    ]
}