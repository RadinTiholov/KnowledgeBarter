import { useNavigate, useParams } from "react-router-dom";
import { useBoughtCourse } from "../../hooks/useBoughtCourse";
import { useCourseWithUser } from "../../hooks/useCourseWithUser";
import { useLessonsWithUser } from "../../hooks/useLessonsWithUser";
import { useOwner } from "../../hooks/useOwner";
import { CourseDetailsBought } from "./CourseDetailsBought/CourseDetailsBought";
import { CourseDetailsPreview } from "./CourseDetailsPreview/CourseDetailsPreview";
import * as lessonService from '../../services/lessonsService'
import * as courseService from '../../services/coursesService'
import { useContext } from 'react';
import { LessonContext } from '../../contexts/LessonContext';
import { CourseContext } from "../../contexts/CourseContext";
import { AuthContext } from "../../contexts/AuthContext";

export const DetailsCourse = () => {
    const {courseId, lessonId} = useParams();
    const [isOwner] = useOwner(courseId, false);
    const {course, owner} = useCourseWithUser(courseId);
    const [isBought] = useBoughtCourse(courseId);
    const {lesson, commentedUsers} = useLessonsWithUser(lessonId);
    const navigate = useNavigate();
    const {delLesson} = useContext(LessonContext)
    const {delCourse} = useContext(CourseContext)
    const {auth, updatePoints} = useContext(AuthContext);
    const onClickDeleteLesson = () => {
        lessonService.del(lessonId)
            .then(res => {
                delLesson(lessonId)
                navigate('/lesson/all')
            }).catch(err => {
                alert(err)
            })
    }
    const onClickDeleteCourse = () => {
        courseService.del(courseId)
            .then(res => {
                delCourse(courseId)
                navigate('/course/all')
            }).catch(err => {
                alert(err)
            })
    }
    const buyCourseOnClick = () => {
        if(auth.kbpoints >= course.price){
            courseService.buy(courseId)
                .then(res => {
                    navigate('/course/bought')
                    updatePoints(-500)
                }).catch(err => {
                    alert(err)
                })
        }else{
            alert("You don't have enough KBPoints")
        }
    }
    return (
        <>
            {isOwner || isBought ? <CourseDetailsBought lesson = {lesson} commentedUsers = {commentedUsers} course = {course} owner = {owner} onClickDeleteLesson= {onClickDeleteLesson} onClickDeleteCourse= {onClickDeleteCourse} isOwner= {isOwner}/> : <CourseDetailsPreview course = {course} owner = {owner} buyCourseOnClick= {buyCourseOnClick}/>}
        </>
    )
}