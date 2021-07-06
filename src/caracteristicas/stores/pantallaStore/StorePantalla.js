import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StoreInfo } from '../componentStore/StoreInfo';
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView) `
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const BarSearch = styled(View) `
    padding: 15px;
`;
const StoreList = styled(View) `
flex: 1;
padding: 18px;
background-Color: #51c4d3;
`;
export default function StorePantalla() {
    return (
        <SafeArea>
            <BarSearch>
                <Searchbar/>  
            </BarSearch>
            <StoreList>
                <StoreInfo/> 
            </StoreList>     
        </SafeArea>
    ) 
}

const styles = StyleSheet.create({

})
