import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { LocationContext } from "../../../servicios/stores/location/locationContext";

const BarSearch = styled(View) `
    padding-left: ${(props) => props.theme.space[2]};
    padding-right: ${(props) => props.theme.space[2]};
    padding-top: ${(props) => props.theme.space[2]};

    position: absolute;
    z-index: 999;
    top: 43px;
    width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    
    useEffect(() => {
        setSearchKeyword(keyword);
    },[keyword]);

    return (
        <BarSearch>
            <Searchbar
                placeholder="Buscar la ciudad"
                icon="map"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />  
        </BarSearch>
    );
};