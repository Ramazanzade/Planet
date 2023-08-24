import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    video: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1
    },
    img: {
        width: 250,
        height: 250
    },
    touc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
    flatlistItem: {
        position: 'absolute',
      }
})