import {createContext, useEffect, useState} from 'react'
import * as coursesService from '../services/coursesService'

export const CourseContext = createContext();

export const CourseProvider = ({children}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        coursesService.getAll()
            .then(res => setCourses(res))
            .catch(err => alert(err))
    }, [])
    const create = (course) => {
        setCourses(state => [...state, course])
    }
    return (
        <CourseContext.Provider value={{courses, create}}>
            {children}
        </CourseContext.Provider>  
    );
}