import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { StorePantalla } from "../../caracteristicas/stores/pantallaStore/StorePantalla";
import { Text } from "react-native";
import { DetallesStorePantalla } from "../../caracteristicas/stores/pantallaStore/DetallesStorePantalla";

const StoreStack = createStackNavigator();

export const StoresNavigator = () => {
    return (
        <StoreStack.Navigator
            screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS}}
        >
            <StoreStack.Screen
                name="Inicio"
                component={StorePantalla}
                options={{headerShown:false}}
            />

            <StoreStack.Screen
                name="Detalles"
                component={DetallesStorePantalla}
                options={{title:""}}
            />
        </StoreStack.Navigator>
    )
}