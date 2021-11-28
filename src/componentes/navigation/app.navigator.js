import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import { StoresNavigator } from "./stores.navigator";

import { MapPantalla } from '../../caracteristicas/map/pantallaMap/mapPantalla';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Tiendas: "grid-outline",
    Mapa: "earth-outline",
    Cuenta: "person-circle-outline",
}

const Account = () => <Text>Mi cuenta</Text>

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
             <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: '#C7364B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
    }
}

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={createScreenOptions}
        >
            <Tab.Screen name="Tiendas" component={StoresNavigator}/>
            <Tab.Screen name="Mapa" component={MapPantalla}/>
            <Tab.Screen name="Cuenta" component={Account}/>
        </Tab.Navigator>
    </NavigationContainer>
);
