import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom';
import { useLessonsWithUser } from "../../hooks/useLessonsWithUser";
import { useOwner } from "../../hooks/useOwner";
import { LessonDetailsBought } from "./LessonDetailsBought/LessonDetailsBought";
import { LessonDetailsPreview } from "./LessonDetailsPreview/LessonDetailsPreview";


export const DetailsLesson = () => {
    const {id} = useParams();
	const {lesson, owner, commentedUsers} = useLessonsWithUser(id);
    const [isOwner] = useOwner(id);
    const [isBought, setIsBought] = useState(() => {
        return null
    });
    return (
        <>
            {isOwner ? <LessonDetailsBought lesson = {lesson} owner = {owner} commentedUsers = {commentedUsers}/> : <LessonDetailsPreview lesson = {lesson} owner = {owner}/>} 
        </>
    )
}