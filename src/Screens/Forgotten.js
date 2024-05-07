import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import style from '../Style/Styles';
import CheckBox from '@react-native-community/checkbox';

export default function Forgotten({navigation}) {
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);

  const handleBack=()=>{
    navigation.goBack('');
  }

  const handleReg=()=>{
    navigation.navigate("RegisterScreen")
  }
  const handleLogin =()=>{
    navigation.navigate("LoginScreen")
  }
  useEffect(()=>{
    fromvalid();
  },[password,phone])
    
  const fromvalid =()=>{
      let error={};

      if (!phone) {
        error.phone ='phone number is required'
        
      }else if ( phone.length >10){
        error.phone = 'Phone number must be reuired 10 characters'

      }
      
      if (!password) {
        error.phone ='Password is required'
        
      }else if ( phone.length > 4){
        error.phone = 'Password must be minimum 4 characters'

      }
      setErrors(error); 
      setIsFormValid(Object.keys(error).length === 0);
  }
  const handleregiter=()=>{
       if (isFormValid) {
        console.log("Form Submit Successfully")
       } else {
         console.log('form has errors . please correct them')
       }
  }
     
  return (
    <View style={style.contener}>
      <ImageBackground source={require('../Assets/Images/BackImage.png')} style={style.registerbackimage}>
        <View style={style.registerView2}>
          <View style={style.Viewdir}>
            <TouchableOpacity style={style.registerBackButton} onPress={handleBack}>
              <View style={style.BackButtonReg}>
                <Image source={require('../Assets/Icon/Vector.png')} style={style.registerBackButton} />
              </View>
            </TouchableOpacity>
            <Text style={style.forgtext}>Forgotten Your Password?</Text>
          </View>
          <View>
          <Text style={style.forgtext2}>Enter The Mobile Number Registered To Your </Text>
          <Text style={ {color:"#feae04",fontWeight:"bold",marginLeft:40}}>BikoSports <Text style={style.forgtext2}>Account And We'll send you a</Text></Text>
          <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>Verification Code</Text>
          </View>
          <View style={style.inputview}>
          <Text style={style.placeholder}>Your Mobile Number</Text>
            <TextInput
              style={style.inputtype}
              keyboardType='number-pad'
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            
            
            <TouchableOpacity style={style.joinbutton} onPress={handleLogin}>

                <Text style={style.regtext3}>LogIn</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
