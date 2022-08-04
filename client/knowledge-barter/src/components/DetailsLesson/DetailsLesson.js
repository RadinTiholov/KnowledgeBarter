import { useParams } from 'react-router-dom';
import { useBoughtLesson } from "../../hooks/useBoughtLesson";
import { useLessonsWithUser } from "../../hooks/useLessonsWithUser";
import { useOwner } from "../../hooks/useOwner";
import { LessonDetailsBought } from "./LessonDetailsBought/LessonDetailsBought";
import { LessonDetailsPreview } from "./LessonDetailsPreview/LessonDetailsPreview";


export const DetailsLesson = () => {
    const {id} = useParams();
	const {lesson, owner, commentedUsers} = useLessonsWithUser(id);
    const [isOwner] = useOwner(id, true);
    const [isBought] = useBoughtLesson(id);
    return (
        <>
            {isBought || isOwner ? <LessonDetailsBought lesson = {lesson} owner = {owner} commentedUsers = {commentedUsers}/> : <LessonDetailsPreview lesson = {lesson} owner = {owner}/>} 
        </>
    )
}