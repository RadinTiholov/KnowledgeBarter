import { useState,useEffect } from "react"

import * as lessonsService from '../services/lessonsService'
import * as authService from '../services/authService'

export const useLessonsWithUser = (id) => {
    const [owner, setOwner] = useState({});
    const [lesson, setLesson] = useState({}
    );

    useEffect(() => {
        lessonsService.getDetails(id)
            .then(res => {
                setLesson(res)
                authService.getDetails(res.owner)
                    .then(res => setOwner(res))
            });
    }, [])

    return [lesson, setLesson, owner]
}