import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEarthOceania, faPlay, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faMoon,  } from '@fortawesome/free-regular-svg-icons';

import tabbarcss from './tabbarcss';
import HomeScreen from '../stack/HomeStack/HomeScreen';
import MoonsScreen from '../stack/MonnsStack/MoonsScreen';
import PlanetScreen from '../stack/PlanetStack/PlanetScreen';
import SualScreen from '../stack/SualStack/SualScreen';
import { View, StyleSheet } from 'react-native';
import BackgroundVideo from './bacround';




const Tab = createBottomTabNavigator();



const Tabbar = ({ route }: any) => {

  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          shadowColor: '#0E1826',
          shadowOffset: {
            width: 0,
            height: 0,

          },
          backgroundColor: '#346173',
          
        },
        tabBarInactiveBackgroundColor: '#022E40',
        tabBarActiveTintColor: "red",
      

      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faEarthOceania} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faMoon} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="MoonsScreen" component={MoonsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faPlay} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="PlanetScreen" component={PlanetScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faGamepad} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="SualScreen" 
        component={SualScreen} 
        navigationKey='Sualpage'
      />
    </Tab.Navigator>

  )
}

export default Tabbar;
