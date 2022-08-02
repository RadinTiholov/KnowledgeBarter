import { Link, useNavigate } from 'react-router-dom';
import background from '../../images/waves-login.svg'
import './Login.css'
import * as authService from '../../services/authService'
import {AuthContext} from '../../contexts/AuthContext'
import { useContext, useState } from 'react';

export const Login = () => {
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        email : "",
        password: ""
    });

    const onChange = (e) => {
        setInputData(state => (
            {...state, [e.target.name] : e.target.value}))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        authService.login(inputData)
            .then(res => {
                console.log(res)
                userLogin(res);
                navigate('/')
            })
            .catch(res => {
                console.log(res)
                navigate('/404')
            })
    }

    return (
        <div style = {{backgroundImage: `url(${background})`}} className="backgound-layer-login">
            {/* Login Form */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-bold fs-5">
                                    Login Form
                                </h5>
                                <form onSubmit={onSubmit}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            name = "email"
                                            value = {inputData.email}
                                            onChange={onChange}
                                        />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    {/* Alert */}
                                    <div
                                        className="alert alert-danger d-flex align-items-center"
                                        role="alert"
                                    >
                                        <i className="fa-solid fa-triangle-exclamation me-2" />
                                        <div className="text-center">
                                            An example EMAIL danger alert with an icon
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            name = "password"
                                            onChange={onChange} 
                                            value = {inputData.password}
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
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-outline-warning"
                                            style={{ backgroundColor: "#636EA7" }}
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <hr className="my-4" />
                                    <h5 style={{ textAlign: "center" }}>or</h5>
                                    <div className="d-grid">
                                        <Link
                                            className="btn btn-outline-warning"
                                            style={{ backgroundColor: "#636EA7" }}
                                            to = "/register"
                                        >
                                            Register
                                        </Link>
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