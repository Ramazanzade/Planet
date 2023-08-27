import { View, Animated, Image, FlatList } from 'react-native';
import Video from 'react-native-video';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import onboardingcss from './onboardingcss';
import { planetaction } from '../../store/feature/PlanetSlice';

const Onboarding = ({ navigation }: any) => {
  const item = useSelector((state: any) => state.Planetreducer.value)
  const dispatch = useDispatch()
  const [localData, setLocalData] = useState([]); // Local state for the fetched data
useEffect(() => {
    dispatch(planetaction(item));
    setLocalData(item)
  }, []);
  const handlePress = (item: any) => {
    dispatch(planetaction(item));
    navigation.navigate('Tabbar', { screen: 'HomeScreen' })
  };
 
  const renederitem = (item: any) => {
    return (
      <TouchableOpacity style={[onboardingcss.touc]} onPress={() => handlePress(item)}>
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

        data={localData}
        renderItem={({ item, index }) => renederitem(item)}
        keyExtractor={(item: any) => item.id.toString()}
        style={onboardingcss.flatlist}
        horizontal={true}
      />
    </View>
  );
}

export default Onboarding;
