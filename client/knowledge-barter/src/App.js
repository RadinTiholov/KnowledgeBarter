import './App.css';
import {
    Routes,
    Route
} from "react-router-dom";

import { BoughtCourses } from './components/BoughtCourses/BoughtCourses';
import { BoughtLessons } from './components/BoughtLessons/BoughtLessons';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { CreateLesson } from './components/CreateLesson/CreateLesson';
import { EditCourse } from './components/EditCourse/EditCourse';
import { EditLesson } from './components/EditLesson/EditLesson';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Lessons } from './components/Lessons/Lessons';
import { Login } from './components/Login/Login';
import { Profile } from './components/Profile/Profile';
import { Register } from './components/Register/Register';
import { YourCourses } from './components/YourCourses/YourCourses';
import { YourLessons } from './components/YourLessons/YourLessons';
import { DetailsLesson } from './components/DetailsLesson/DetailsLesson';
import { DetailsCourse } from './components/DetailsCourse/DetailsCourse';
import { Liked } from './components/Liked/Liked';
import { LessonProvider } from './contexts/LessonContext';

function App() {
    return (
        <>
        <Header />
            <LessonProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/lesson/all' element={<Lessons />} />
                    <Route path='/lesson/create' element={<CreateLesson />} />
                    <Route path='/lesson/edit/:id' element={<EditLesson />} />
                    <Route path='/lesson/details/:id' element={<DetailsLesson />} />
                    <Route path='/lesson/bought' element={<BoughtLessons />} />
                    <Route path='/lesson/yours' element={<YourLessons />} />
                    <Route path='/course/all' element={<Courses />} />
                    <Route path='/course/create' element={<CreateCourse />} />
                    <Route path='/course/edit/:id' element={<EditCourse />} />
                    <Route path='/course/details/:id' element={<DetailsCourse />} />
                    <Route path='/course/bought' element={<BoughtCourses />} />
                    <Route path='/course/yours' element={<YourCourses />} />
                    <Route path='/liked' element={<Liked />} />
                </Routes>
            </LessonProvider>
        <Footer />
        </>

    );
}

export default App;
