import './CreateLesson.css'
import background from '../../images/waves-login.svg'

export const CreateLesson = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}} className="backgound-layer-create">
            {/* Login Form */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-bold fs-5">
                                    Create Lesson
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
                                            name="video"
                                            id="video"
                                            placeholder="Some link"
                                        />
                                        <label htmlFor="video">Video Link</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
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
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="tags"
                                            id="tags"
                                            placeholder="Tags"
                                        />
                                        <label htmlFor="tags">Tags (split them by space)</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-control mb-3">
                                        <label htmlFor="resources">Resources</label>
                                        <input
                                            className="form-control"
                                            name="resources"
                                            type="file"
                                            id="resources"
                                            placeholder="Files"
                                        />
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Resources danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-control mb-3">
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            name="article"
                                            id="article"
                                            rows={10}
                                            defaultValue={""}
                                        />
                                        <label htmlFor="article">Article</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example Video Link danger alert with an icon
                  </div>
                </div> */}
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
        </div>

    )
}