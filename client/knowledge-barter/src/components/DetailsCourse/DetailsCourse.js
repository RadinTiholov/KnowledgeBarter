import { useParams } from "react-router-dom";
import { useBoughtCourse } from "../../hooks/useBoughtCourse";
import { useCourseWithUser } from "../../hooks/useCourseWithUser";
import { useLessonsWithUser } from "../../hooks/useLessonsWithUser";
import { useOwner } from "../../hooks/useOwner";
import { CourseDetailsBought } from "./CourseDetailsBought/CourseDetailsBought";
import { CourseDetailsPreview } from "./CourseDetailsPreview/CourseDetailsPreview";

export const DetailsCourse = () => {
    const {courseId, lessonId} = useParams();
    const [isOwner] = useOwner(courseId, false);
    const {course, owner} = useCourseWithUser(courseId);
    const [isBought] = useBoughtCourse(courseId);
    const {lesson, commentedUsers} = useLessonsWithUser(lessonId);
    return (
        <>
            {isOwner || isBought ? <CourseDetailsBought lesson = {lesson} commentedUsers = {commentedUsers} course = {course} owner = {owner}/> : <CourseDetailsPreview course = {course} owner = {owner}/>}
        </>
    )
}