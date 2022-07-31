import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';

function App() {
    return (
        <>
            <Header/>
            {/* <Home/>  */}
            <Login/>
            <Footer/>
        </>

    );
}

export default App;
