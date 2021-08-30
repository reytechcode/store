import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { StorePantalla } from './src/caracteristicas/stores/pantallaStore/StorePantalla';
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
      <StoreContextProvider>
       <Navigation/>
      </StoreContextProvider>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
 
});
