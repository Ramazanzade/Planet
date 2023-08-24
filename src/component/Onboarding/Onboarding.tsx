import { View, Animated, Image, FlatList } from 'react-native';
import Video from 'react-native-video';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import onboardingcss from './onboardingcss';
import { planetaction } from '../../store/feature/PlanetSlice';

const Onboarding = ({navigation}: any) => {
  const item = useSelector((state: any) => state.Planetreducer.value)
const dispatch = useDispatch()

  const renederitem = (item: any) => {
    const handlePress = () => {
      dispatch(planetaction(item));
      navigation.navigate('Tabbar', { screen: 'HomeScreen' })
      console.log('saan');
      
    };


    return (
      <TouchableOpacity style={[onboardingcss.touc]} onPress={()=>handlePress()}>
        <Image
          source={item.imge1}
          style={onboardingcss.img}

        />
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Video
        source={require('../../asset/imge/2.mp4')}
        resizeMode="cover"
        style={onboardingcss.video}
        repeat={true}
      />
      <FlatList

        data={item}
        renderItem={({ item, index }) => renederitem(item)}
        keyExtractor={(item: any) => item.id.toString()}
        style={onboardingcss.flatlist}
        horizontal={true}
      />

    </View>
  );
}

export default Onboarding;
