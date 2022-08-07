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
    const create = (lesson) => {
        setLessons(state => [...state, lesson])
    }
    const update = (lesson) => {
        setLessons(state => lessons.map(x => x._id === lesson._id ? lesson : x));
    }
    return (
        <LessonContext.Provider value={{lessons, create, update}}>
            {children}
        </LessonContext.Provider>  
    );
}