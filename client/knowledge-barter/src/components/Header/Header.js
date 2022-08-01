import './Header.css'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <section id="nav-bar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width={60} height={35} />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-light" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/lesson/all">
                                        Lessons
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/course/all">
                                        Courses
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <form className="d-flex" role="search">
                                        <input
                                            className="form-control me-2 text-light"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <button className="btn btn-outline-warning" type="submit">
                                            Search
                                        </button>
                                    </form>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto-reverse mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle text-light"
                                        to="/lesson/create"
                                        style={{ fontWeight: 600, fontSize: "large", paddingRight: 20 }}
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Create
                                    </Link>
                                    <ul
                                        className="dropdown-menu text-light"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/lesson/create">
                                                Lesson
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/course/create">
                                                Course
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/profile">
                                        KBPoints: 100
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle text-light"
                                        to="/profile"
                                        style={{ fontWeight: 600, fontSize: "large", paddingRight: 80 }}
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profile
                                    </Link>
                                    <ul
                                        className="dropdown-menu text-light"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/profile">
                                                Information
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/lesson/yours">
                                                Your Lessons
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/course/yours">
                                                Your Courses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/lesson/bought">
                                                Bought Lessons
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/course/bought">
                                                Bought Courses
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/liked">
                                                Liked
                                            </Link>
                                        </li>
                                        <li>
                                            <button className="dropdown-item">
                                                <h5 style={{fontSize: '18px', fontWeight: 600}}>
                                                    Logout
                                                </h5>
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
    )
}