import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from 'react-native'
import {LinearGradient} from 'react-native-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'
import { BackgroundImage } from '../utils/GetIcon';
import LottieView from 'lottie-react-native'
import DiceRoll from '../assets/animation/diceroll.json'
import Arrow from '../assets/images/arrow.png'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayerChance, selectDiceNo, selectDiceRolled } from '../redux/reducers/gameSelectors';
import { enablPileSelection, updateDiceNo, updatePlayerChance } from '../redux/reducers/gameSlice';
const Dice = React.memo(({color , rotate , player , data}) => {

    const dispatch = useDispatch();
    const currentplayerchance = useSelector(selectCurrentPlayerChance);
    const isDiceRolled = useSelector(selectDiceRolled);
    const diceNo = useSelector(selectDiceNo);
    const playerPiece = useSelector(state => state.game[`player${currentplayerchance}`]);

    const pileIcon = BackgroundImage.GetImage(color);
    const diceIcon = BackgroundImage.GetImage(diceNo);

    const arrow = useRef(new Animated.Value(0)).current;
    const [diceroll,setDiceroll] = useState(false);

    const delay = ms => new Promise(res => setTimeout(res , ms));

    const handleDicePress = async () =>{
         const newDiceNo = Math.floor(Math.random()*6 ) + 1;
          setDiceroll(true);
          await delay(800);
          dispatch(updateDiceNo({diceNo:newDiceNo}));
          setDiceroll(false);

          const isAnyPieceLive = data?.findIndex(i=>i.pos!=0 && i.pos!=57);
          const isAnyPieceLocked  = data?.findIndex(i=>i.pos ==0)

          if(isAnyPieceLive == -1){
            if(newDiceNo == 6){
                dispatch(enablPileSelection({playerNo:player}));
            }else{
                let TURN = player + 1;
                if(TURN > 4){
                    TURN = 1;
                }
                await delay(600);
                dispatch(updatePlayerChance({turn:TURN}))
            }
          }else{

          }
    }

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

                { currentplayerchance === player && !diceroll ?(
                     <TouchableOpacity
                      disabled = {isDiceRolled}
                      activeOpacity={0.4}
                      onPress={handleDicePress}
                     >
                         <Image source={diceIcon} style={styles.dice}/>
                     </TouchableOpacity>):(null)
                } 

                </View>

            </LinearGradient>
               
        </View>

      {currentplayerchance === player && !diceroll &&  <Animated.View style = {{transform:[{translateX:arrow}]}}>
            <Image source={Arrow} style={{height:30,width:50}}/>
        </Animated.View> }

      {currentplayerchance === player && diceroll &&  <LottieView
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