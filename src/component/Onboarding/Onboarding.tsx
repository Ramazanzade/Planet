import { View, Text, Image, FlatList } from 'react-native';
import Video from 'react-native-video';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import onboardingcss from './onboardingcss';

const Onboarding = (index:any) => {
  const item = useSelector((state: any) => state.Planetreducer.value)
  const [scrollOffset, setScrollOffset] = useState(0);

  const renederitem = (item:any) => {
    const depth = Math.abs(scrollOffset - index * 100); // Adjust the depth based on scroll position
    const opacity = 1 - depth / 1000;
    const scale = 1 - depth / 500;

    const itemStyle = {
      opacity: opacity < 0 ? 0 : opacity,
      transform: [{ scale: scale < 0.5 ? 0.5 : scale }],
      zIndex: opacity < 0 ? -1 : 1,
    };

    return (
      <TouchableOpacity style={[onboardingcss.touc,itemStyle]}>
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
        keyExtractor={(item:any) => item.id.toString()} 
        onScroll={(event) => {
          setScrollOffset(event.nativeEvent.contentOffset.y);
        }}
      />
      
    </View>
  );
}

export default Onboarding;
