import './CourseDetails.css'
import background from '../../images/waves-details.svg'

export const CourseDetails = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}}  className="backgound-layer-details">
            {/* Login Form */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h1 className="card-title text-center mb-5 fw-bold">Course Name</h1>
                                <img
                                    className="img-fluid rounded"
                                    src="https://bit.ly/3PQ44Az"
                                    alt="Lesson Pic"
                                />
                                <hr className="my-4" />
                                <p>Some description here about the lesson or the course.</p>
                                <hr className="my-1" />
                                <p>Creator: Radin Tiholov</p>
                                <hr className="my-1" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <i className="fa-solid fa-thumbs-up fa-2xl  mt-5" />
                                                    <span className="fw-bold">: 300</span>
                                                </div>
                                                <div className="col">
                                                    <i className="fa-solid fa-eye fa-2xl  mt-5" />
                                                    <span className="fw-bold">: 1200</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <i className="fa-solid fa-lightbulb fa-2xl  mt-5" />
                                                    <span className="fw-bold">: 200$</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <div className="row">
                                                <button
                                                    className="btn btn-outline-warning btn-lg mt-4 fw-bold"
                                                    style={{
                                                        backgroundColor: "#636EA7",
                                                        width: 130,
                                                        height: 50
                                                    }}
                                                    type="submit"
                                                >
                                                    Like
                                                </button>
                                            </div>
                                            <div className="row">
                                                <button
                                                    className="btn btn-outline-warning btn-lg mt-2 fw-bold"
                                                    style={{
                                                        backgroundColor: "#636EA7",
                                                        width: 130,
                                                        height: 50
                                                    }}
                                                    type="submit"
                                                >
                                                    Buy (200)
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}