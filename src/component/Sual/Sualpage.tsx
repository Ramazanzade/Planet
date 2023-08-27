import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import onboardingcss from '../Onboarding/onboardingcss';
import Video from 'react-native-video';

const Sualpage = ({navigation}:any) => {
    return (
        <View style={styles.container}>
            <Video
                source={require('../../asset/d/d2.mp4')}
                resizeMode="cover"
                style={onboardingcss.video}
                repeat={true}
            />
            <TouchableOpacity style={styles.touc} onPress={()=>navigation.navigate('Sual')}>
                <Text style={styles.text}>
                    Oyuna Başla
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        padding: 20,
        fontSize: 20,
        color: '#ffffff'
    },
    touc: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor:'#7297A6'
    },

})
export default Sualpage