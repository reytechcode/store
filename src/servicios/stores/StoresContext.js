import React, { useState, createContext, useEffect, useMemo } from "react";
import { storesRequest, storesTransform } from "./StoresService";

export const StoresContext = createContext();

export const StoreContextProvider = ({ children }) => {
    const [stores, setStores] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const recuperarStores = () => {
        setIsLoading(true);
        setTimeout(() => {
            storesRequest().then(storesTransform).then((results) => {
                setIsLoading(false);
                setStores(results);
            }).catch(err => {
                setIsLoading(false);
                setError(err);
            });
        }, 2000);
    };

    useEffect (() => {
        recuperarStores();
    },[]);
    return (
        <StoresContext.Provider
            value={{
                stores,
                isLoading,
                error,
            }}
        >
            {children}
        </StoresContext.Provider>
    )
}