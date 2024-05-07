import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function Slip() {
  return (
    <View style={style.container}>
      <View style={style.borderContainer}>
       <View style={style.borderContainer2}>
       <TouchableOpacity style={style.button}>
        <Text style={style.textsty}>View My Bets</Text>
       </TouchableOpacity>
       <Text style={style.textsty2}>Your Balance <Text style={style.textsty3}>TSH 102.00</Text> </Text>
       </View>
       <View style={style.ViewContainer}>
       <TouchableOpacity style={style.button2}>
        <Text style={style.textsty}>Sport 0</Text>
       </TouchableOpacity>
       </View>
       <View style={style.borderContainer2}>
        <Text style={style.textsty4}>Booking code</Text>
        <TextInput style={style.textinput}/>
        <TouchableOpacity style={style.button3} >
          <Text style={style.textsty5}>Load</Text>
        </TouchableOpacity>
       </View>
       <View style={style.Viewbottom}>

       </View>
       <View style={style.Viewbottom2}>
        <Text style={style.text6}>Learn how to place bet</Text>
       </View>
       </View>
     
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    margin:10

  },
  borderContainer:{
    borderWidth:3,
    height:430,
    width:350,
    borderColor:"#6d2299",
    borderRadius:10,
    

  },
  borderContainer2:{
    flexDirection:"row",
    

  },
  button:{
    borderRadius:10,
    backgroundColor:"#E7A024",
    margin:10,
    marginLeft:10,
    height:40,
    width:120
  },
  textsty:{
    textAlign:"center",
    color:"white",
    margin:10

  },
  textsty2:{
    textAlign:"center",
    color:"black",
    margin:20,
    

  },
  textsty3:{
    color:"black",
    fontWeight:"bold"

  },
  ViewContainer:{
    height:70,
    width:347,
    borderBottomWidth:1,
    borderTopWidth:1,
    margin:5,
    marginLeft:-2
  },
  button2:{
    borderRadius:10,
    backgroundColor:"#6d2299",
    margin:10,
    marginLeft:10,
    height:40,
    width:328

  },
  textsty4:{
    color:"black",
    fontWeight:"bold",
    margin:10

  },
  textinput:{
    height:30,
    width:150,
    borderWidth:1,
    borderColor:"#E7A024",
    margin:5
  },
  button3:{
    height:30,
    backgroundColor:"#e7a024",
    margin:5,
    width:50,
    borderRadius:5
  },
  textsty5:{
    textAlign:"center",
    color:"white",
    margin:5
  },
  Viewbottom:{
    backgroundColor:"#6d2299",
    margin:10,
    marginLeft:10,
    height:200,
    width:310,
    marginLeft:15

  },
  Viewbottom2:{
    backgroundColor:"#e7a024",
    margin:-10,
    marginLeft:10,
    height:25,
    width:310,
    marginLeft:15

  },
  text6:{
    color:"#6d2299",
    textAlign:"center"
  }
  
})