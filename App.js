import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{ flex:1, marginTop: StatusBar.currentHeight}}>
      <View style={{backgroundColor: "#ff8882", padding: 18}}>
        <Text>Buscador</Text>  
      </View>
      <View style={{backgroundColor: "#51c4d3", flex: 1, padding: 18}}>
        <Text>Lista de elementos</Text>  
      </View>     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
