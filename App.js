import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StorePantalla } from './src/caracteristicas/stores/pantallaStore/StorePantalla';
import { LocationContextProvider } from './src/servicios/stores/location/locationContext';

import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsRaZB36x55HXc1tzdc_U_AWKIkKFq7Do",
  authDomain: "store-420e5.firebaseapp.com",
  projectId: "store-420e5",
  storageBucket: "store-420e5.appspot.com",
  messagingSenderId: "238708357959",
  appId: "1:238708357959:web:f1a541d218f27cdaffaa62"
};

// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { StoreContextProvider } from "./src/servicios/stores/StoresContext";
import { Navigation } from "./src/componentes/navigation/index";

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <StoreContextProvider>
            <Navigation/>
          </StoreContextProvider>
        </LocationContextProvider>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
 
});
