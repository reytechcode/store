import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StorePantalla } from "../../caracteristicas/stores/pantallaStore/StorePantalla";

const StoreStack = createStackNavigator();

export const StoresNavigator = () => {
    return (
        <StoreStack.Navigator>
            <StoreStack.Screen
                name="Inicio"
                component={StorePantalla}
                options={{headerShown:false}}
            />
        </StoreStack.Navigator>
    )
}