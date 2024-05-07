import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { CountryList } from 'react-native-country-codes-picker';

export default function MenuScreen({navigation}) {
  const [selected, setSelected] = React.useState('');
  const handalhowtoplay=()=>{
    navigation.navigate('How_To_Play')
  }
  return (
    <View style={style.Viewcon}>
    <ImageBackground source={require('../Assets/Images/fotball_player.png')}style={style.backimage}>
     <View style={{backgroundColor:"#FFFFFF87",flex:1}}>
     <ScrollView>
     <View style={style.Menu}>
      <View style={{margin:10,marginLeft:30}}>
        <TouchableOpacity>
        <View style={style.direction}>
        <Image source={require('../Assets/Images/Live.png')} style={style.imagelogo2}/>
        <Text style={style.Textsty}>LIVE</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={style.direction}>
        <Image source={require('../Assets/Images/SVG.png')} style={style.imagelogo}/>
        <Text style={style.Textsty}>UPCOMING</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={style.direction}>
        <Image source={require('../Assets/Images/JACKPOT.png')} style={style.imagelogo}/>
        <Text style={style.Textsty}>JACKPOT</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={style.direction}>
        <Image source={require('../Assets/Images/star.png')} style={style.imagelogo}/>
        <Text style={style.Textsty}>POPULAR</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={style.direction}>
        <Image source={require('../Assets/Images/Come.png')} style={style.imagelogo}/>
        <Text style={style.Textsty}>VIRTUAL SPORTS</Text>
        </View>
        </TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity style={style.Button} onPress={handalhowtoplay}>
        <Text style={style.Textsty2}>HOW TO PLAY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.picker}>
        <Text style={style.Textsty2}>TORNAMENT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.picker2}>
        <Text style={style.Textsty2}>POPULAR COUNTRIES</Text>
      </TouchableOpacity>
       </ScrollView>
       </View>
     </ImageBackground>
    </View>
  )
}
const style=StyleSheet.create({
  Viewcon:{ 
    flex:1,
  },
  backimage:{
    height:'100%',
    width:"100%"
  },
  Menu:{
    height:300,
    width:375,
    margin:9,
    backgroundColor:"#FFFFFF87", 
    borderColor:"#6d2299",
    borderWidth:2,
    borderRadius:10,
    alignItems:"center"

  },
  direction:{
    flexDirection:"row",
    margin:10

  },
  Textsty:{
    fontSize:20,
    fontWeight:"bold",
    color:"black",
    marginLeft:20
  },
  imagelogo:{
    height:30,
    width:30
  },
  imagelogo2:{
    height:25,
    width:40
  },
  Button:{
    borderRadius:10,
    backgroundColor:"#E7A024",
    height:50,
    width:380,
    marginLeft:5
  },
  Textsty2:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    textAlign:"center",
    margin:10
  
  },
  picker:{
    borderRadius:10,
    backgroundColor:"#E7A024",
    height:50,
    width:380,
    marginLeft:5,
    margin:10
  },
  picker2:{
    borderRadius:10,
    backgroundColor:"#6D2299",
    height:50,
    width:380,
    marginLeft:5,
    margin:10
  },
})