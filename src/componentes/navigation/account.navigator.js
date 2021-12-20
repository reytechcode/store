import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { InicioPantalla } from "../../caracteristicas/account/pantallaAccount/InicioPantalla";
import { IniciarSesionPantalla } from "../../caracteristicas/account/pantallaAccount/iniciarSesionPantalla";
import { CrearCuentaPantalla } from "../../caracteristicas/account/pantallaAccount/crearCuentaPantalla";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Inicio" component={ InicioPantalla }/>
            <Stack.Screen name="IniciarSesion" component={ IniciarSesionPantalla }/>
            <Stack.Screen name="CrearCuenta" component={ CrearCuentaPantalla }/>
        </Stack.Navigator>
    );
}