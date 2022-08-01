import './CreateCourse.css'
import background from '../../images/waves-login.svg'

export const CreateCourse = () => {
    return (<div style={{ backgroundImage: `url(${background})` }} className="backgound-layer-login">
        {/* Login Form */}
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-bold fs-5">
                                Create Course
                            </h5>
                            <form>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        id="title"
                                        placeholder="Some title"
                                    />
                                    <label htmlFor="title">Title</label>
                                </div>
                                {/* Alert */}
                                <div
                                    className="alert alert-danger d-flex align-items-center"
                                    role="alert"
                                >
                                    <i className="fa-solid fa-triangle-exclamation me-2" />
                                    <div className="text-center">
                                        An example Title danger alert with an icon
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        id="description"
                                        placeholder="Some description"
                                    />
                                    <label htmlFor="description">Description</label>
                                </div>
                                {/* Alert */}
                                {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
              <i class="fa-solid fa-triangle-exclamation me-2"></i>
              <div class="text-center">
                An example Description danger alert with an icon
              </div>
            </div> */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="thumbnail"
                                        id="thumbnail"
                                        placeholder="Some link"
                                    />
                                    <label htmlFor="thumbnail">Thumbnail Link</label>
                                </div>
                                {/* Alert */}
                                {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
              <i class="fa-solid fa-triangle-exclamation me-2"></i>
              <div class="text-center">
                An example Video Link danger alert with an icon
              </div>
            </div> */}
                                <h5>Lessons</h5>
                                <div className="form-floating mb-3">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox1"
                                            defaultValue="option1"
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                                            C# free course
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox2"
                                            defaultValue="option2"
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                                            Fitness course
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox3"
                                            defaultValue="option1"
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                                            C# free course 2
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox4"
                                            defaultValue="option1"
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox4">
                                            C# free course 3
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="inlineCheckbox5"
                                            defaultValue="option1"
                                        />
                                        <label className="form-check-label" htmlFor="inlineCheckbox5">
                                            C# free course 4
                                        </label>
                                    </div>
                                    {/* Alert */}
                                    <div
                                        className="alert alert-danger d-flex align-items-center"
                                        role="alert"
                                    >
                                        <i className="fa-solid fa-triangle-exclamation me-2" />
                                        <div className="text-center">
                                            You need to create 5 lessons ot unlock course creating
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button
                                        className="btn btn-outline-warning"
                                        style={{ backgroundColor: "#636EA7" }}
                                        type="submit"
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}