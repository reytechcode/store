import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StoreInfo } from '../componentStore/StoreInfo';

export default function StorePantalla() {
    return (
        <SafeAreaView style={{ flex:1, marginTop: StatusBar.currentHeight}}>
            <View style={styles.buscador}>
                <Searchbar/>  
            </View>
            <View style={{backgroundColor: "#f7f7f7", flex: 1, padding: 18}}>
                <StoreInfo/> 
            </View>     
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buscador: {
        padding: 15,
      }
})
