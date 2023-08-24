import { View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Video from 'react-native-video';
import homecss from '../Home/homecss';

const Planet = () => {
    const item = useSelector((state: any) => state.Planetreducer.value);

    return (
        <View style={{flex:1}}>
            {/* <Video
                source={item.video}
                resizeMode="cover"
                style={homecss.video}
                repeat={true}
            /> */}
        </View>
    )
}

export default Planet