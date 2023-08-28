import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Planet from '../../../component/Planet/Planet';


const Stack = createNativeStackNavigator();
const PlanetScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Planet" component={Planet} />

</Stack.Navigator>
  )
}

export default PlanetScreen