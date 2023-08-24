import { Image, Text, View, } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import homecss from './homecss';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

const Home = () => {
  const item = useSelector((state: any) => state.Planetreducer.value)

  return (
    <View style={{ flex: 1 }}>
      {/* <Video
      source={require('../../asset/imge/2.mp4')}
      resizeMode="cover"
      style={homecss.video}
      repeat={true}
    /> */}
      <View style={homecss.view1}>
        <ScrollView horizontal={true} style={homecss.view3}>
          <View style={homecss.view4}>
            <Image
              source={item.imge1}
              style={homecss.img1}
            />
            <Text style={homecss.text1}>{item.home.text1}</Text>
          </View>
          <View style={homecss.view4}>
            <Image
              source={item.home.homeimge2}
              style={homecss.img1}
            />
            <Text style={homecss.text1}>{item.home.text2}</Text>
          </View>
          <View style={homecss.view4}>
            <Text style={homecss.text1}>{item.home.text3}</Text>
            <Image
              source={item.home.homeimge3}
              style={homecss.img1}
            />
          </View>
          <View style={homecss.view4}>
            <Image
              source={item.home.homeimge4}
              style={homecss.img1}
            />
            <Text style={homecss.text1}>{item.home.text4}</Text>

          </View>
          <View style={homecss.view4}>
            <Text style={homecss.text1}>{item.home.text5}</Text>
            <Image
              source={item.home.homeimge5}
              style={homecss.img1}
            />
          </View>
          <View style={homecss.view4}>
            <Image
              source={item.home.homeimge6}
              style={homecss.img1}
            />
            <Text style={homecss.text1}>{item.home.text6}</Text>

          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home