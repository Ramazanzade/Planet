import { Image, Text, View, } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import homecss from '../Home/homecss'

const Monns = () => {
    const item = useSelector((state: any) => state.Planetreducer.value);
  
    return (
      <View style={{ flex: 1 }}>
        <Video
        source={item.video1}
        resizeMode="cover"
        style={homecss.video}
        repeat={true}
      />
        <View style={homecss.view1}>
          <ScrollView horizontal={true} style={homecss.view3}>
            {item.peykleri.peykimge1 && item.peykleri.text1 && (
              <View style={homecss.view4}>
                <Image
                  source={item.peykleri.peykimge1}
                  style={homecss.img1}
                />
                <Text style={homecss.text1}>{item.peykleri.text1}</Text>
              </View>
            )}
            {item.peykleri.peykimge2 && item.peykleri.text2 && (
              <View style={homecss.view4}>
                <Image
                  source={item.peykleri.peykimge2}
                  style={homecss.img1}
                />
                <Text style={homecss.text1}>{item.peykleri.text2}</Text>
              </View>
            )}
            {item.peykleri.peykimge3 && item.peykleri.text3 && (
              <View style={homecss.view4}>
                <Text style={homecss.text1}>{item.peykleri.text3}</Text>
                <Image
                  source={item.peykleri.peykimge3}
                  style={homecss.img1}
                />
              </View>
            )}
            {item.peykleri.peykimge4 && item.peykleri.text4 && (
              <View style={homecss.view4}>
                <Image
                  source={item.peykleri.peykimge4}
                  style={homecss.img1}
                />
                <Text style={homecss.text1}>{item.peykleri.text4}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default Monns;
  