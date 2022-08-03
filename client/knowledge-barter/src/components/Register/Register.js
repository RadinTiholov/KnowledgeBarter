import './Register.css'
import background from '../../images/waves-register.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'

export const Register = () => {
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        email : "",
        username: "",
        password: "",
        rePassword: "",
        profilePicture: ""
    });

    const onChange = (e) => {
        setInputData(state => (
            {...state, [e.target.name] : e.target.value}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputData.password === inputData.rePassword){
            authService.register(inputData)
            .then(res => {
                userLogin(res);
                navigate('/')
            })
            .catch(res => {
                console.log(res)
                navigate('/404')
            })
        }
    }
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="backgound-layer-register">
            {/* Login Form */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-bold fs-5">
                                    Register Form
                                </h5>
                                <form onSubmit={onSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={inputData.email}
                                            onChange ={onChange}
                                        />
                                        <label htmlFor="email">Email address</label>
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
                                            id="username"
                                            name="username"
                                            placeholder="ExAmPlE"
                                            value={inputData.username}
                                            onChange ={onChange}
                                        />
                                        <label htmlFor="username">Username</label>
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
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            value={inputData.password}
                                            onChange ={onChange}
                                        />
                                        <label htmlFor="password">Password</label>
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
                                            name="rePassword"
                                            placeholder="Repeat Password"
                                            value={inputData.rePassword}
                                            onChange ={onChange}
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
                                    {/* profilePicture */}
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="profilePicture"
                                            name="profilePicture"
                                            placeholder="Profile Picture Link"
                                            value={inputData.profilePicture}
                                            onChange ={onChange}
                                        />
                                        <label htmlFor="profilePicture">Profile Picture Link</label>
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