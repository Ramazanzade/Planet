import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sual from '../../../component/Sual/Sual';
import Sualpage from '../../../component/Sual/Sualpage';


const Stack = createNativeStackNavigator();
const SualScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Sualpage" component={Sualpage} />
      <Stack.Screen name="Sual" component={Sual} />
    </Stack.Navigator>
  )
}

export default SualScreen