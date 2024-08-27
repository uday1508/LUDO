import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Color'
import LottieView from 'lottie-react-native'
import Fireworks from '../assets/animation/firework.json'
import { Polygon, Svg } from 'react-native-svg'
const Goals = () => {
    const size = 300;
    const [celebrate,setCelebrate] = useState(false);
  return (
    <View style={styles.ParentContainer}>
        { celebrate &&
        <LottieView
        source={Fireworks}
        autoPlay
        loop
        hardwareAccelerationAndroid
        speed={1}
        style={styles.lottieView}
        />
        }

         <Svg height={size} width={size - 5}>
            <Polygon
             points={`0,0 ${size/2}, ${size/2} ${size} ,0`}
             fill={Colors.green}
            />

            <Polygon
             points={`${size},0 ${size} ,${size} ${size/2},${size/2}`}
             fill={Colors.yellow}
            />

            <Polygon
             points={`0 ,${size} ${size/2}, ${size/2} ${size},${size}`}
             fill={Colors.blue}
            />

             <Polygon
             points={`0,0 ${size/2},${size/2} 0,${size}`}
             fill={Colors.red}
            />            
         </Svg>

    </View>
  )
}

const styles = StyleSheet.create({
    ParentContainer:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.8,
        width:'20%',
        height:'100%',
        overflow:'hidden',
        backgroundColor:'white',
        borderColor:'grey'
    },
    lottieView:{
        width:'100%',
        height:'100%',
        zIndex:1,
        position:'absolute',
    }
})

export default Goals