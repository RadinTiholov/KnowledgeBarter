import { useEffect, useState } from "react"
import { Banner } from "./Banner/Banner"
import { LessonsDisplay } from "./LessonsDisplay/LessonsDisplay"
import { PointsBanner } from "./PointsBanner/PointsBanner"
import * as lessonsService from '../../services/lessonsService'
import * as coursesService from '../../services/coursesService'

export const Home = () => {
    const [lessons, setLessons] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        lessonsService.getHighestLessons()
            .then(res => setLessons(res))
            .catch(err => alert(err))
        coursesService.getMostPopular()
            .then(res => setCourses(res))
            .catch(err => alert(err))
    }, [])

    return (
        <>
            <Banner/>
            <LessonsDisplay title = {'Highest rated lessons'} route = {'/lesson/details/'} lessons = {lessons}/>
            <LessonsDisplay title = {'Most popular courses'} route = {'/course/details/'} courses = {courses}/>
            <PointsBanner/>
        </>
    )
}