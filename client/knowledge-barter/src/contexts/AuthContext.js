import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useAuth('auth', null);

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{auth, userLogin, userLogout, isAuthenticated: !!auth?.accessToken}}>
            {children}
        </AuthContext.Provider>  
    );
}