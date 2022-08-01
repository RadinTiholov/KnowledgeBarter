import { useState } from "react"
import { LessonDetailsBought } from "./LessonDetailsBought/LessonDetailsBought";
import { LessonDetailsPreview } from "./LessonDetailsPreview/LessonDetailsPreview";

export const DetailsLesson = () => {
    const [isBought, setIsBought] = useState(true);

    return (
        <>
            {isBought ? <LessonDetailsBought/> : <LessonDetailsPreview/>}
        </>
    )
}