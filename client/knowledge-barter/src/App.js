import './App.css';
import { CourseDetails } from './components/CourseDetails/CourseDetails';
import { Courses } from './components/Courses/Courses';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LessonDetails } from './components/LessonDetails/LessonDetails';
import { Lessons } from './components/Lessons/Lessons';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { Register } from './components/Register/Register';

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
            <Courses/>
            <Footer/>
        </>

    );
}

export default App;
