import './App.css';

function App() {
    return (
        <>
            {/* Nav bar */}
            <section id="nav-bar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="./images/logo.png" alt="" width={60} height={35} />
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
            {/* Banner */}
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="promo-title ">Knowledge</h1>
                            <h1 style={{ marginLeft: 250, fontSize: 70, fontWeight: 600 }}>
                                Barter
                            </h1>
                            <p>Learn new things by sharing things you know.</p>
                            <p style={{ marginLeft: 250 }}>Barter your knowledge.</p>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-1 text-light"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-warning"
                                    style={{ backgroundColor: "#636EA7" }}
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                                id="knowledge-image"
                                className="image-fluid"
                                src="./images/knowledgeIcon.png"
                                alt="icon"
                            />
                        </div>
                    </div>
                </div>
                <img className="wave-image" src="./images/wave1.png" alt="wave" />
            </section>
            {/* Highes rated lessons */}
            <section id="lessons-display">
                <div className="container">
                    <div className="row">
                        <div className="col text-xl-center">
                            <h1 className="fw-bold mb-3">Highest rated lessons</h1>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/100/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">C# free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/200/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Java free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/900/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Python free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/900/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Fitness free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Most popular courses */}
            <section id="lessons-display">
                <div className="container">
                    <div className="row">
                        <div className="col text-xl-center">
                            <h1 className="fw-bold mt-5 mb-4">Most popular courses</h1>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/100/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">C# free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/200/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Java free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/900/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Python free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-display" style={{ width: "15rem" }}>
                                <img
                                    src="https://picsum.photos/900/300"
                                    className="card-img"
                                    style={{ height: "15rem" }}
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Fitness free course</h5>
                                    <a
                                        href="/"
                                        className="btn"
                                        style={{ backgroundColor: "#636EA7", color: "#fff" }}
                                    >
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Coins */}
            <section id="points-banner">
                <img className="wave-image" src="./images/wave2.png" alt="wave" />
                <h1 className="fw-bold text-xl-center">KBPoints</h1>
                <div className="row" style={{ margin: "auto" }}>
                    <div className="col-6 text-center">
                        <img
                            id="knowledge-image"
                            className="image-fluid"
                            src="./images/coin-image.webp"
                            alt="icon"
                        />
                    </div>
                    <div className="col-6 ">
                        <p style={{ fontSize: "200%", marginTop: 150 }}>
                            With KBP you can unlock lessons and courses.
                        </p>
                        <p style={{ fontSize: "200%" }}>
                            You can earn some by creating lessons or courses
                        </p>
                        <p />
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer
                className=" text-center text-white"
                style={{ backgroundColor: "#636ea7" }}
            >
                {/* Grid container */}
                <div className="container p-4">
                    {/* Section: Text */}
                    <section className="mb-4">
                        <p>Knowledge Barter App</p>
                    </section>
                    {/* Section: Text */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2022 Copyright:
                    <a className="text-white" href="https://github.com/RadinTiholov">
                        Radin Tiholov
                    </a>
                </div>
                {/* Copyright */}
            </footer>
        </>

    );
}

export default App;
