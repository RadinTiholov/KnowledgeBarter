import './Register.css'
import background from '../../images/waves-register.svg'

export const Register = () => {
    return (
        <div style = {{backgroundImage: `url(${background})`}} className="backgound-layer-register">
            {/* Login Form */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-bold fs-5">
                                    Register Form
                                </h5>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example EMAIL danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="username"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="ExAmPlE"
                                        />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An USERNAME example danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example PASSWORD danger alert with an icon
                  </div>
                </div> */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingRepeatPassword"
                                            placeholder="Repeat Password"
                                        />
                                        <label htmlFor="floatingRepeatPassword">Repeat Password</label>
                                    </div>
                                    {/* Alert */}
                                    {/* <div class="alert alert-danger d-flex align-items-center" role="alert">
                  <i class="fa-solid fa-triangle-exclamation me-2"></i>
                  <div class="text-center">
                    An example PASSWORD danger alert with an icon
                  </div>
                </div> */}
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-outline-warning"
                                            style={{ backgroundColor: "#636EA7" }}
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    <hr className="my-4" />
                                    <h5 style={{ textAlign: "center" }}>or</h5>
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-outline-warning"
                                            style={{ backgroundColor: "#636EA7" }}
                                            type="submit"
                                        >
                                            Login
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