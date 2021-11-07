import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Pressable } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { StoreInfo } from '../componentStore/StoreInfo';
import styled from "styled-components/native";
import { StoresContext } from "../../../servicios/stores/StoresContext";
import { Search } from '../componentStore/searchComponent';

const SafeArea = styled(SafeAreaView) `
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const StoreList = styled(FlatList).attrs({
    contentContainerStyle: {
        paddingTop: 8, 
        paddingLeft: 16, 
        paddingRight: 16, 
        paddingBottom: 16,
    }
}) ``;
const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;
const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`;
export const StorePantalla = ({ navigation }) => {
    const { isLoading, error, stores } = useContext(StoresContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading
                        size={50}
                        animating={true}
                        color={Colors.blue300}
                    />
                </LoadingContainer>
            )
            }

            <Search/>
            
            <StoreList
                data={stores}
                renderItem={({ item }) => {
                  return (
                    <Pressable onPress={() => navigation.navigate("Detalles", {
                        store: item,
                    })}>
                        <StoreInfo store={item}/>
                    </Pressable>
                  );
                } 
            }
                keyExtractor={(item) => item.name}
            />           
        </SafeArea>
    ) 
}

const styles = StyleSheet.create({

})
