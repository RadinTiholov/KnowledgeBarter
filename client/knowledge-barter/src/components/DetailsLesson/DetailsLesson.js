import { useNavigate, useParams } from 'react-router-dom';
import { useBoughtLesson } from "../../hooks/useBoughtLesson";
import { useLessonsWithUser } from "../../hooks/useLessonsWithUser";
import { useOwner } from "../../hooks/useOwner";
import { LessonDetailsBought } from "./LessonDetailsBought/LessonDetailsBought";
import { LessonDetailsPreview } from "./LessonDetailsPreview/LessonDetailsPreview";
import * as lessonService from '../../services/lessonsService'
import { useContext } from 'react';
import { LessonContext } from '../../contexts/LessonContext';
import { AuthContext } from '../../contexts/AuthContext';

export const DetailsLesson = () => {
    const {id} = useParams();
	const {lesson, owner, commentedUsers} = useLessonsWithUser(id);
    const navigate = useNavigate();
    const [isOwner] = useOwner(id, true);
    const [isBought] = useBoughtLesson(id);
    const {delLesson} = useContext(LessonContext)
    const {auth, updatePoints} = useContext(AuthContext)
    const onClickDelete = () => {
        lessonService.del(id)
            .then(res => {
                delLesson(id)
                navigate('/lesson/all')
            }).catch(err => {
                alert(err)
            })
    }
    const buyLessonOnClick = () => {
        if(auth.kbpoints >= lesson.price){
            lessonService.buy(id)
                .then(res => {
                    navigate('/lesson/bought')
                    updatePoints(-100)
                }).catch(err => {
                    alert(err)
                })
        }else{
            alert("You don't have enough KBPoints")
        }
        
    }
    return (
        <>
            {isBought || isOwner ? <LessonDetailsBought lesson = {lesson} owner = {owner} commentedUsers = {commentedUsers} onClickDelete= {onClickDelete} isOwner= {isOwner}/> : <LessonDetailsPreview lesson = {lesson} owner = {owner}  buyLessonOnClick= {buyLessonOnClick}/>} 
        </>
    )
}