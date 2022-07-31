import { Banner } from "./Banner/Banner"
import { LessonsDisplay } from "./LessonsDisplay/LessonsDisplay"
import { PointsBanner } from "./PointsBanner/PointsBanner"

export const Home = () => {
    return (
        <>
            <Banner/>
            <LessonsDisplay title = {'Highest rated lessons'}/>
            <LessonsDisplay title = {'Most popular courses'}/>
            <PointsBanner/>
        </>
    )
}