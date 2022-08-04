import { useContext, useState, useEffect } from "react"
import {AuthContext} from '../contexts/AuthContext'
import * as lessonsService from '../services/lessonsService'
export const useOwner = (id) => {
    const {auth} = useContext(AuthContext)
    const [isOwner, setIsOwner] = useState(() => {
        
    });

    useEffect(() => {
        lessonsService.getDetails(id)
            .then(res => setIsOwner(res.owner === auth._id))
    }, [])
    return [
        isOwner
    ]
}