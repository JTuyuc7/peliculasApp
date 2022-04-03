import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Movie } from '../interfaces/movieInterface';

export type RouteStackParams = {
    HomeScreen: undefined,
    DetailScreen: Movie
}

const Stack = createNativeStackNavigator<RouteStackParams>();

const Navigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}

export default Navigator;