import React, { useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState(null);
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword="julio andrade") => {
        setIsLoading(true);
        setKeyword(searchKeyword);

        locationRequest(searchKeyword.toLocaleLowerCase())
        .then(locationTransform)
        .then(results => {
            setError(null);
            setIsLoading(false);
            setLocation(results);
            console.log(results);
        }).catch((err) =>{
            setIsLoading(false);
            setError(err);
            console.log(err);
        });
    };

    useEffect(() => {
        onSearch();
    },[]);

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