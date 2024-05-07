import { View, Text, StyleSheet, StatusBar ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function BottomTap() {
  return (
    <View style={style.contaner}>
        <StatusBar 
        backgroundColor={"#6d2299"}
        barStyle={'light-content'}/>
        <View style={style.contaner2}>
         <Image source={require('../Assets/Images/logo1.png')}style={style.imagelogosty}/>
       <Text style={style.Textsty}>TSH</Text>
       <TouchableOpacity style={style.Button}>
        <Text style={style.Textsty2}>Deposit</Text>
       </TouchableOpacity>
       <TouchableOpacity>
        <Image source={require('../Assets/Images/Profile2.png')}style={style.Profilelogo}/>
    </TouchableOpacity>
        </View>
        <View style={style.contaner3}>
        <View style={{flexDirection:"row"}}>
         <TouchableOpacity>
            <Image source={require('../Assets/Icon/Home.png')}style={style.Profilelogo2}/>
            <Text style={style.icontext}>Home</Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Image source={require('../Assets/Icon/Menu.png')}style={style.Profilelogo2}/>
            <Text style={style.icontext}>Menu</Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Image source={require('../Assets/Icon/live.png')}style={style.Profilelogo2}/>
            <Text style={style.icontext2}>Live</Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Image source={require('../Assets/Icon/jackpot.png')}style={style.Profilelogo2}/>
            <Text style={style.icontext}>Jackpot</Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Image source={require('../Assets/Icon/Search.png')}style={style.Profilelogo2}/>
            <Text style={style.icontext2}>Search</Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Image source={require('../Assets/Icon/contract.png')}style={style.Profilelogo2}/>
            <Text style={style.icontext2}>Slip</Text>
         </TouchableOpacity>
         </View>
     </View>
     
     
      
    </View>
  )
}
const style=StyleSheet.create({
    contaner :{
        flex:1
    },
    contaner2 :{
        height:60,
        width:400,
        backgroundColor:"#6d2299",
        flexDirection:"row",
 },
 contaner3 :{
    height:70,
    width:400,
    backgroundColor:"#6d2299",
    flexDirection:"row",
    borderTopWidth:2,
    borderColor:"white",
    borderBottomWidth:2
},
    imagelogosty:{
        margin:15
    },
    Button:{
        borderRadius:10,
        borderWidth:1,
        backgroundColor:"#F0CC2E",
        height:40,
        width:100,
        margin:8
    },
    Textsty:{
        fontSize:15,
        fontWeight:"bold",
        color:"white",
        marginLeft:60,
        margin:15
    },
    Profilelogo:{
        height:30,
        width:30,
        margin:10,
        marginLeft:-2
    },
     Textsty2:{
        fontSize:15,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
        margin:8,
        letterSpacing:1
    },
    Profilelogo2:{
        height:30,
        width:30,
        margin:10,
        marginLeft:22


    },
    icontext:{
        marginTop:-7,
        color:"white",
        fontWeight:"bold",
        marginLeft:18
    },
    icontext2:{
        marginTop:-7,
        color:"white",
        fontWeight:"bold",
        marginLeft:23
    }
})