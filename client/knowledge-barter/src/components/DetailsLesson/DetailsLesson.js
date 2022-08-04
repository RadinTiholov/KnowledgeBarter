import { useState} from "react"
import { useParams } from 'react-router-dom';
import { useLessonsWithUser } from "../../hooks/useLessonsWithUser";
import { LessonDetailsBought } from "./LessonDetailsBought/LessonDetailsBought";
import { LessonDetailsPreview } from "./LessonDetailsPreview/LessonDetailsPreview";

export const DetailsLesson = () => {
    const [isBought, setIsBought] = useState(false);
    const {id} = useParams();
	const [lesson, setLesson, owner] = useLessonsWithUser(id);
    return (
        <>
            {isBought ? <LessonDetailsBought lesson = {lesson} owner = {owner}/> : <LessonDetailsPreview lesson = {lesson} owner = {owner}/>}
        </>
    )
}