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
    const update = (course) => {
        setCourses(state => course.map(x => x._id === course._id ? course : x));
    }
    return (
        <CourseContext.Provider value={{courses, create, update}}>
            {children}
        </CourseContext.Provider>  
    );
}