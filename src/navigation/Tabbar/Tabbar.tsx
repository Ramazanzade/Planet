import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faGear, faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
    <View style={{ flex: 1 }}>
      <BackgroundVideo></BackgroundVideo>
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

        },
        tabBarInactiveBackgroundColor: 'rgba(0, 0, 0, 0.01)',
        tabBarActiveTintColor: "rgba(0, 0, 0, 0.01)",

      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faHome} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="HomeScreen" component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faUserPlus} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="MoonsScreen" component={MoonsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faGear} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="PlanetScreen" component={PlanetScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }: any) => <FontAwesomeIcon icon={faGear} style={tabbarcss.tabIcon} size={35} />,
          tabBarShowLabel: false,
        }}
        name="SualScreen" component={SualScreen}
      />
    </Tab.Navigator>
    </View>

  )
}

export default Tabbar;
