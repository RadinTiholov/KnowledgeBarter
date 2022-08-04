import { useState, useEffect } from "react"

import * as lessonsService from '../services/lessonsService'
import * as authService from '../services/authService'

export const useLessonsWithUser = (id) => {
    const [owner, setOwner] = useState({});
    const [lesson, setLesson] = useState({});
    const [commentedUsers, setCommentedUsers] = useState([]);
    useEffect(() => {
        lessonsService.getDetails(id)
            .then(res => {
                setLesson(res)
                authService.getDetails(res.owner)
                    .then(res => setOwner(res))

                let promises = [];
                for (let i = 0; i < res.comments.length; i++) {
                    promises.push(authService.getDetails(res.comments[i].owner))
                }
                Promise.all(promises)
                    .then((values) => {
                        setCommentedUsers(values)
                    });
            })
    }, [id])

    return {lesson, setLesson, owner, commentedUsers, setCommentedUsers}
}