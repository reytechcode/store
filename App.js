import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";

import StorePantalla from './src/caracteristicas/stores/pantallaStore/StorePantalla';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StorePantalla/>
    </ThemeProvider>
    
  );
}

const styles = StyleSheet.create({
 
});
