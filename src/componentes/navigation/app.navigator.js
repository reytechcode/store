import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import { StorePantalla } from "../../caracteristicas/stores/pantallaStore/StorePantalla";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Tiendas: "grid-outline",
    Mapa: "earth-outline",
    Cuenta: "person-circle-outline",
}

const Maps = () => <Text>Mapa</Text>
const Account = () => <Text>Mi cuenta</Text>

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
             <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: '#C7364B',
        tabBarInactiveTintColor: 'gray',
    }
}

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={createScreenOptions}
        >
            <Tab.Screen name="Tiendas" component={StorePantalla}/>
            <Tab.Screen name="Mapa" component={Maps}/>
            <Tab.Screen name="Cuenta" component={Account}/>
        </Tab.Navigator>
    </NavigationContainer>
);
