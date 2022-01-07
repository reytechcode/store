import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authenticationService";
import { isEmpty } from "lodash";
import { validarEmail } from "../../utils/utils";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null); 
    const onLogin = (email, password) => {
        if(isEmpty(email) || isEmpty(password)){
            setError("Debe de llenar todos los campos");
        }else if(!validarEmail(email)){
            setError("Revise que su correo este bien escrito");
        }else {
            setIsLoading(true);
            loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            }).catch((e) => {
                setIsLoading(false);
                setError("El correo o la contraseña están incorrectos");
            });
        }

        
    };

    return(
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
}