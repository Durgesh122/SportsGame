import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import style from '../Style/Styles';
import CheckBox from '@react-native-community/checkbox';

export default function LoginUser({navigation}) {
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
  const handleforgotton =()=>{
    navigation.navigate("Forgotten")
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
        <View style={style.registerView3}>
          <View style={style.Viewdir}>
            <TouchableOpacity style={style.registerBackButton} onPress={handleBack}>
              <View style={style.BackButtonReg}>
                <Image source={require('../Assets/Icon/Vector.png')} style={style.registerBackButton} />
              </View>
            </TouchableOpacity>
            <Text style={style.Logtext}>Wellcome back!</Text>
          </View>
          <Text style={style.regtext2}>Please enter your details</Text>
          <View style={style.inputview}>
          <Text style={style.placeholder}>Your Mobile Number</Text>
            <TextInput
              style={style.inputtype}
              keyboardType='number-pad'
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            <Text style={style.placeholder2}>Password</Text>
            <TextInput
              style={style.inputtype}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
            <View style={{flexDirection:"row"}}>
            <Text style={style.placeholder5}>Min. 4 Characters</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={handleforgotton} >
            <Text style={style.placeholder6}>Forget Password?</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.joinbutton} onPress={handleLogin}>
                <Text style={style.regtext3}>LogIn</Text>
            </TouchableOpacity>
            <View style={style.Viewdir}>
            <Text style={style.placeholder4}>Dont Have An Account?</Text>
            <TouchableOpacity onPress={handleReg}>
            <Text style={style.logbutton}>Join Now</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
