import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import Cell from './Cell';

const VerticalPath = React.memo(({cells,color}) => {

    const groupedcells = useMemo(()=>{
        const groups = []
        for(let i = 0 ; i < cells.length ;i+=3){
             groups.push(cells.slice(i,i+3));
        }

        return groups;
    },[cells]);



  return (
        <View
         style={{
            flexDirection:'row',
            alignItems:'center',
            width:'20%',
            height:'100%'
         }}
        >

            <View style={{flexDirection:'column',width:'100%',height:'100%'}}>

                {
                    groupedcells.map((group,index)=>(
                        <View key={`group=${index}`} style={{flexDirection:'row',width:'33%',height:'16.7%'}}>

                            {
                                group.map((id)=>{
                                   return <Cell key={`cell-${id}`} id = {id} color = {color}/>
                                })
                            }

                        </View>
                    ))
                }

            </View>

        </View>
  )
  
});

export default VerticalPath