import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import style from '../Style/Styles'

export default function SplashScreen({navigation}) {
  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigation.replace("WithoutLogin")
    },2000)
    return()=>clearTimeout(timer);
  },[navigation])
  
  return (
    <View style={style.contener}>
      <ImageBackground source={require('../Assets/Images/soccer.png')}style={style.BackImagesty}>
        <Image source={require('../Assets/Images/batsman.png')}style={style.batsman}/>
        <Image source={require('../Assets/Images/baskitbol.png')}style={style.baskit}/>
        <Text style={style.wellcome}>WELLCOME</Text>
        <Image source={require('../Assets/Images/Logo2.png')}style={style.logo}/>
        <Text style={style.www}>WWW.BIKOSPORTS.COM</Text>
      </ImageBackground>  
      
    </View>
  )
}