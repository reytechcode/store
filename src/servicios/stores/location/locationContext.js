import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("tulcan");
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        
    };

    useEffect(() => {
        if(!keyword.length){
            return;
        }
        
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then(results => {
            setError(null);
            setIsLoading(false);
            setLocation(results);
            
        }).catch((err) =>{
            setIsLoading(false);
            setError(err);
            console.log(err);
        });
    },[keyword]);

    return <LocationContext.Provider
        value={{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
        }}
    >
        {children}
    </LocationContext.Provider>
}