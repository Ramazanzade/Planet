import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Monns from '../../../component/Monns/Monns';


const Stack = createNativeStackNavigator();
const MoonsScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name="Monns" component={Monns} />
</Stack.Navigator>
  )
}

export default MoonsScreen