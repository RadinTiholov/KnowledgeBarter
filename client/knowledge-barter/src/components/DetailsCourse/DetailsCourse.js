import { useState } from "react";
import { CourseDetailsBought } from "./CourseDetailsBought/CourseDetailsBought";
import { CourseDetailsPreview } from "./CourseDetailsPreview/CourseDetailsPreview";

export const DetailsCourse = () => {
    const [isBought, setIsBought] = useState(false);

    return (
        <>
            {isBought ? <CourseDetailsBought/> : <CourseDetailsPreview/>}
        </>
    )
}