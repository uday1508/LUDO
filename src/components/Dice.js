import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import {LinearGradient} from 'react-native-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'
import { BackgroundImage } from '../utils/GetIcon';
import LottieView from 'lottie-react-native'
import DiceRoll from '../assets/animation/diceroll.json'
import Arrow from '../assets/images/arrow.png'
const Dice = React.memo(({color , rotate , player , data}) => {
    const diceNo = 6;
    const pileIcon = BackgroundImage.GetImage(color);
    const diceIcon = BackgroundImage.GetImage(diceNo);

    const arrow = useRef(new Animated.Value(0)).current;
    const [diceroll,setDiceroll] = useState(false);

    useEffect(()=>{
        const animateArrow = () =>{
            Animated.loop(
                Animated.sequence([
                    Animated.timing(arrow,{
                        toValue:8,
                        duration:600,
                        easing:Easing.out(Easing.ease),
                        useNativeDriver:true,
                    }),

                    Animated.timing(arrow,{
                        toValue:-8,
                        duration:600,
                        easing:Easing.out(Easing.ease),
                        useNativeDriver:true,
                    }),

                ])
            ).start();
        }

        animateArrow();
    },[])
   
  return <View style = {[styles.flexRow,{transform:[{scaleX:rotate?-1:1}]}]}>

        <View style = {styles.border1}>

            <LinearGradient
             style={styles.linearGradient}
             colors={['#0052be','#5f9fcb','#97c6c9']}
             start={{x:0,y:0.5}}
             end = {{x:1,y:0.5}}
            >
                <View style={styles.pileContainer}>

                    <Image source={pileIcon} style={styles.pileIcon}/>

                </View>

            </LinearGradient>

        </View>

        <View style={styles.border2}>

        <LinearGradient
             style={styles.diceGradient}
             colors={['#aacBab','#aacBab','#aacBab']}
             start={{x:0,y:0.5}}
             end = {{x:1,y:0.5}}
            >
                <View style={styles.diceContainer}>


                     <TouchableOpacity>
                         <Image source={diceIcon} style={styles.dice}/>
                     </TouchableOpacity>

                </View>

            </LinearGradient>
               
        </View>

      { diceroll &&  <Animated.View style = {{transform:[{translateX:arrow}]}}>
            <Image source={Arrow} style={{height:30,width:50}}/>
        </Animated.View> }

      { diceroll &&  <LottieView
         source={DiceRoll}
         style={styles.rollingDice}
         loop={false}
         autoPlay
         cacheComposition={true}
         hardwareAccelerationAndroid
        />}

  </View>
});

const styles = StyleSheet.create({
    flexRow:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },

    dice:{
      height:45,
      width:45,
    },

    rollingDice:{
      height:80,
      width:80,
      zIndex:99,
      top:-25,
      position:'absolute',
      left:40,

    },

    border1:{
       borderWidth:3,
       borderRightWidth:0,
       borderColor:'yellow'
    },
    border2:{
        borderWidth:3,
       padding:1,
       backgroundColor:'#aac8ab',
       borderRadius:10,
       borderLeftWidth:3,
       borderColor:'#aac8ab'
    },
    pileIcon:{
        width:35,
        height:35
    },
    pileContainer:{
        paddingHorizontal:3,
    },
    diceContainer:{
        backgroundColor:'#eBc0c1',
        borderWidth:1,
        borderRadius:5,
        width:55,
        height:55,
        paddingHorizontal:8,
        padding:4,
        justifyContent:'center',
        alignItems:'center'
    },
    diceGradient:{
        borderWidth:3,
        borderLeftWidth:3,
        borderColor:'#f0ce2c',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Dice