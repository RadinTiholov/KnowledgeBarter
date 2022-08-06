import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useAuth('auth', null);

    const userLogin = (authData) => {
        setAuth(authData);
    };
    const updatePointsForLesson = () => {
        setAuth(state => {
            let temp = {...state}  // creating copy of state variable jasper
            temp.kbpoints = state.kbpoints + 100;                 // update the name property, assign a new value                 
            return temp 
        });
    };
    const updatePointsForCourse = () => {
        setAuth(state => {
            let temp = {...state}  // creating copy of state variable jasper
            temp.kbpoints = state.kbpoints + 100;                 // update the name property, assign a new value                 
            return temp 
        });
    };

    const userLogout = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{auth, userLogin, userLogout, updatePointsForLesson, updatePointsForCourse, isAuthenticated: !!auth?.accessToken}}>
            {children}
        </AuthContext.Provider>  
    );
}