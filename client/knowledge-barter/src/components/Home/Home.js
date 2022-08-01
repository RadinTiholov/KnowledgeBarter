import { Banner } from "./Banner/Banner"
import { LessonsDisplay } from "./LessonsDisplay/LessonsDisplay"
import { PointsBanner } from "./PointsBanner/PointsBanner"

export const Home = () => {
    return (
        <>
            <Banner/>
            {/* ToDo remove the parameter below*/}
            <LessonsDisplay title = {'Highest rated lessons'} route = {'/lesson/details/1'}/>
            <LessonsDisplay title = {'Most popular courses'} route = {'/course/details/1'}/>
            <PointsBanner/>
        </>
    )
}