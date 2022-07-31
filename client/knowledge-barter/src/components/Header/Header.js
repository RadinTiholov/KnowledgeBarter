import './Header.css'
import logo from '../../images/logo.png'
export const Header = () => {
    return (
        <section id="nav-bar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="" width={60} height={35} />
                        </a>
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
                                    <a className="nav-link active text-light" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">
                                        Lessons
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/">
                                        Courses
                                    </a>
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
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="/"
                                        style={{ fontWeight: 600, fontSize: "large", paddingRight: 20 }}
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Create
                                    </a>
                                    <ul
                                        className="dropdown-menu text-light"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Lesson
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Course
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="/"
                                        style={{ fontWeight: 600, fontSize: "large", paddingRight: 20 }}
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        KBPoints: 100
                                    </a>
                                    <ul
                                        className="dropdown-menu text-light"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Buy
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Info
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-light"
                                        href="/"
                                        style={{ fontWeight: 600, fontSize: "large", paddingRight: 80 }}
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Profile
                                    </a>
                                    <ul
                                        className="dropdown-menu text-light"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Information
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Your Lessons
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Your Courses
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Bought Lessons
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Bought Courses
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Liked
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Logout
                                            </a>
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