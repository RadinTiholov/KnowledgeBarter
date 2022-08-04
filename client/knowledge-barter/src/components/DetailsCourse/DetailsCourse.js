import { useParams } from "react-router-dom";
import { useBoughtCourse } from "../../hooks/useBoughtCourse";
import { useCourseWithUser } from "../../hooks/useCourseWithUser";
import { useOwner } from "../../hooks/useOwner";
import { CourseDetailsBought } from "./CourseDetailsBought/CourseDetailsBought";
import { CourseDetailsPreview } from "./CourseDetailsPreview/CourseDetailsPreview";

export const DetailsCourse = () => {
    const {id} = useParams();
    const [isOwner] = useOwner(id, false);
    const {course, owner} = useCourseWithUser(id);
    const [isBought] = useBoughtCourse(id);
    return (
        <>
            {isOwner || isBought ? <CourseDetailsBought course = {course} owner = {owner}/> : <CourseDetailsPreview course = {course} owner = {owner}/>}
        </>
    )
}