import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const BackgroundVideo = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../asset/yer/y.mp4')} // Replace with your video URL
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default BackgroundVideo;
