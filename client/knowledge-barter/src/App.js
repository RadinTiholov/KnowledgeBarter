import './App.css';
import { BoughtCourses } from './components/BoughtCourses/BoughtCourses';
import { BoughtLessons } from './components/BoughtLessons/BoughtLessons';
import { CourseDetails } from './components/CourseDetails/CourseDetails';
import { CourseDetailsBought } from './components/CourseDetailsBought/CourseDetailsBought';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { CreateLesson } from './components/CreateLesson/CreateLesson';
import { EditCourse } from './components/EditCourse/EditCourse';
import { EditLesson } from './components/EditLesson/EditLesson';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LessonDetails } from './components/LessonDetails/LessonDetails';
import { LessonDetailsBought } from './components/LessonDetailsBought/LessonDetailsBought';
import { Lessons } from './components/Lessons/Lessons';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { Register } from './components/Register/Register';
import { YourCourses } from './components/YourCourses/YourCourses';
import { YourLessons } from './components/YourLessons/YourLessons';

function App() {
    return (
        <>
            <Header/>
            {/* <Home/>  */}
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <LessonDetails/> */}
            {/* <CourseDetails/> */}
            {/* <Profile/> */}
            {/* <Lessons/> */}
            {/* <Courses/> */}
            {/* <LessonDetailsBought/> */}
            {/* <CourseDetailsBought/> */}
            {/* <CreateLesson/> */}
            {/* <CreateCourse/> */}
            {/* <EditLesson/> */}
            {/* <EditCourse/> */}
            {/* <BoughtLessons/> */}
            {/* <BoughtCourses/> */}
            {/* <YourCourses/> */}
            <YourLessons/>
            <Footer/>
        </>

    );
}

export default App;
