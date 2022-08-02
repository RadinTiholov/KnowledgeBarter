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

    return (
        <CourseContext.Provider value={{courses}}>
            {children}
        </CourseContext.Provider>  
    );
}