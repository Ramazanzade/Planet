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
    view1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column'
    },
    view2: {

    },
    img: {
        width: 400,
        height: 500,
        marginTop: '-20%'
    },
    img1: {
        width: 250,
        height: 250,
        borderRadius:20,
        position:'absolute',
        zIndex:100,
        marginTop:-150,
        alignSelf:'center'
    },
    view4: {
        marginHorizontal:50,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width:300,
        height:400,
        borderRadius:20,
        marginTop:240,
        position:'relative'
       
    },
    view3: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.001)',
    },
    text1: {
        color: '#F2AB6D',
        width:'90%',
        marginTop:200,
        alignSelf:'center'
    },
   
})