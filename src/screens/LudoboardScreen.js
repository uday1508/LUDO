import { View, Text, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Cover from '../components/Cover'
import MenuIcon from '../assets/images/menu.png'
import StartImage from '../assets/images/start.png'
import { deviceHeight, deviceWidth } from '../constants/Scaling'
import Dice from '../components/Dice'
import { Colors } from '../constants/Color'
import Pocket from '../components/Pocket'
import VerticalPath from '../components/VerticalPath'
import { firstplot, fourthplot, Secondplot, thirdplot } from '../utils/CellData'
import HorizontalPath from '../components/HorizontalPath'
import Goals from '../components/Goals'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';
import {  King, selectDiceTouch, selectP1, selectP2, selectP3, selectP4 } from '../redux/reducers/gameSelectors'
const LudoboardScreen = () => {

    const player1 = useSelector(selectP1);
    const player2 = useSelector(selectP2);
    const player3 = useSelector(selectP3);
    const player4 = useSelector(selectP4);

    const isDicetouch = useSelector(selectDiceTouch);
    const king = useSelector(King);

    const isFocused = useIsFocused();
    const [showstart,setShowstart] = useState(false);
    const [menu,setMenu] = useState(false);

    const opacity = useRef(new Animated.Value(1)).current;

    // useEffect(()=>{
    //     if(isFocused){
    //         setShowstart(true);
    //         const blinkanimation = new Animated.loop(Animated.sequence([
    //             Animated.timing(opacity,{
    //                 toValue:0,
    //                 duration:500,
    //                 useNativeDriver:true
    //             }),
    //             Animated.timing(opacity,{
    //                 toValue:1,
    //                 duration:500,
    //                 useNativeDriver:true
    //             })
    //         ]))

    //         blinkanimation.start();

    //         const timeout = setTimeout(()=>{
    //             blinkanimation.stop();
    //             setShowstart(false);
    //         },2500);

    //         return () => {
    //             blinkanimation.stop();
    //             clearTimeout(timeout);
    //         }

    //     }

        
    // },[isFocused]);


  return (
        <Cover>

                <TouchableOpacity style={{position:'absolute',top:60,left:20}}>
                    <Image source={MenuIcon} style={{height:30,width:30}}/>        
                </TouchableOpacity>


                 <View style={styles.container}>

                        {/* RED AND GREEN  */}

                        <View style={styles.flexRow}>
                              <Dice  color = {Colors.red} player = {2} data = {player2} />
                              <Dice  color = {Colors.green} rotate player = {3} data = {player3} />
                        </View>

                        {/* LUDO BOARD  */}

                        <View style = {styles.ludoBoard}>

                            <View style={styles.plotContainer}>

                                <Pocket color = {Colors.red} player={2} />
                                <VerticalPath cells = {Secondplot} color={Colors.green}   />

                                <Pocket color = {Colors.green} player={3} />
                            </View>

                            <View style={styles.pathContainer}>

                                <HorizontalPath cells = {firstplot} color = {Colors.red}/>
                                <Goals/>
                                <HorizontalPath cells = {thirdplot} color = {Colors.yellow}/>

                            </View>

                            <View style={styles.plotContainer}>

                                <Pocket color = {Colors.blue} player={1} />
                                <VerticalPath cells = {fourthplot} color={Colors.blue}   />
                                <Pocket color = {Colors.yellow} player={4} />
                            </View>

                            
                            
                        </View>


                        {/* BLUE AND YELLOW */}

                        <View style={styles.flexRow}>
                              <Dice  color = {Colors.blue} player = {1} data = {player1} />
                              <Dice  color = {Colors.yellow} rotate player = {4} data = {player4} />
                        </View>

                 </View>

                 {
                    showstart && (
                        <Animated.Image
                         source={StartImage}
                         style={{
                            width:deviceWidth*0.5,
                            height:deviceHeight*0.2,
                            position:'absolute',
                            opacity
                         }}
                        />
                    )
                 }
            
        </Cover>
  )
}

const styles = StyleSheet.create({
    container:{
       alignSelf:'center',
       justifyContent:'center',
       height:deviceHeight*0.5,
       width:deviceWidth,
    },
    flexRow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:30
    },

    ludoBoard:{
        width:'100%',
        height:'100%',
        padding:10,
        alignSelf:'center',
        backgroundColor:'green'
    },
    plotContainer:{
        width:'100%',
        height:'40%',
        justifyContent:"space-between",
        flexDirection:'row',
        backgroundColor:'white'
    },
    pathContainer:{
      flexDirection:'row',
      width:'100%',
      height:'20%',
      justifyContent:'space-between',
    }

})

export default LudoboardScreen

