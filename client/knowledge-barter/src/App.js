import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LessonDetails } from './components/LessonDetails/LessonDetails';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
    return (
        <>
            <Header/>
            {/* <Home/>  */}
            {/* <Login/> */}
            {/* <Register/> */}
            <LessonDetails/>
            <Footer/>
        </>

    );
}

export default App;
