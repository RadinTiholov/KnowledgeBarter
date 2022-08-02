import {createContext, useEffect, useState} from 'react'
import * as lessonsService from '../services/lessonsService'

export const LessonContext = createContext();

export const LessonProvider = ({children}) => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        lessonsService.getAll()
            .then(res => setLessons(res))
            .catch(err => alert(err))
    }, [])

    return (
        <LessonContext.Provider value={{lessons}}>
            {children}
        </LessonContext.Provider>  
    );
}