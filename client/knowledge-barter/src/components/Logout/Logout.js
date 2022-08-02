import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import * as request from "../../services/requester" 

export const Logout = () => {
    const navigate = useNavigate();
    const {auth,userLogout} = useContext(AuthContext);
    useEffect(() => {
        request.get('http://localhost:3030/users/logout', auth.accessToken)
            .then(res => {
                userLogout();
                localStorage.clear();
                navigate('/');
            })
            .catch(() => {
                navigate('/')
            })
    }, [])

    return null;
}