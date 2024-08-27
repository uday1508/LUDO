import { View, Text, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { Colors } from '../constants/Color'
import Pile from './Pile'
import RFV, { RFValue } from 'react-native-responsive-fontsize'
import { arrowcells, safecells, starscells } from '../utils/CellData'
import {ArrowRightIcon, StarIcon} from 'react-native-heroicons/outline'
const Cell = ({cell,color,id}) => {

    const isSafe = useMemo(()=>safecells.includes(id),[id]);
    const isStar = useMemo(()=>starscells.includes(id),[id]);
    const isArrow = useMemo(()=>arrowcells.includes(id),[id]);


  return (
    <View style={[styles.container,{backgroundColor:isSafe?color:'white'}]}>
      {/* <Text>{id}</Text> */}
      {/* <Pile
       cell={true}
       player={2}
       onPress={()=>{}}
       color={color}
      /> */}
      {isStar && <StarIcon size={20} color={'grey'}/>}
      {isArrow && <ArrowRightIcon 
      size={RFValue(12)} color={'grey'}
      style={{
        transform:[{
        rotate:id === 38 ? '180deg' :id === 25 ? '90deg' : id === 51 ? '-90deg' :'0deg' 
      }]
    }}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.4
    },
    pileContainer:{
        position:'absolute',
        top:0,
        bottom:0,
        zIndex:99
    }
})

export default React.memo(Cell);