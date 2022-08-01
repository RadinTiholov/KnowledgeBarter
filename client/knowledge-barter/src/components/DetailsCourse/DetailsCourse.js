import { useState } from "react";
import { CourseDetailsBought } from "./CourseDetailsBought/CourseDetailsBought";
import { CourseDetailsPreview } from "./CourseDetailsPreview/CourseDetailsPreview";

export const DetailsCourse = () => {
    const [isBought, setIsBought] = useState(true);

    return (
        <>
            {isBought ? <CourseDetailsBought/> : <CourseDetailsPreview/>}
        </>
    )
}