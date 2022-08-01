import background from '../../images/waves-lessons.svg'
import { Course } from './Course/Course'
import './YourCourses.css'
export const YourCourses = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}}className="backgound-layer-courses">
            <div className="col text-xl-center">
                <h1 className="fw-bold mb-3 pt-5">Your Courses</h1>
            </div>
            <div className="container">
                <div className="text-center">
                    <div className="row row-cols-5 gy-3 pb-5">
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                    </div>
                </div>
            </div>
        </div>

    )
}