import React, { useState, createContext, useEffect, useContext } from "react";
import { storesRequest, storesTransform } from "./StoresService";
import { LocationContext } from "./location/locationContext";

export const StoresContext = createContext();

export const StoreContextProvider = ({ children }) => {
    const [stores, setStores] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const recuperarStores = (loc) => {
        setIsLoading(true);
        setStores([]);
        setTimeout(() => {
            storesRequest(loc).then(storesTransform).then((results) => {
                setIsLoading(false);
                setStores(results);
            }).catch(err => {
                setIsLoading(false);
                setError(err);
            });
        }, 2000);
    };

    useEffect (() => {
        if(location){
            const locationString = `${location.lat},${location.lng}`;
            recuperarStores(locationString);
        }
        
    },[location]);
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