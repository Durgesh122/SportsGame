import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import style from '../Style/Styles';
import CheckBox from '@react-native-community/checkbox';

export default function RegisterScreen({navigation}) {
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const [ispasswordVisible,setIsPassowordVisible]=useState(false)
  const togglePassword=()=>{
    setIsPassowordVisible(!ispasswordVisible)
  }

  const handleBack=()=>{
    navigation.goBack('');
  }
const handleloginuser=()=>{
  navigation.navigate('LoginUser')
}

     
  return (
    <View style={style.contener}>
      <ImageBackground source={require('../Assets/Images/BackImage.png')} style={style.registerbackimage}>
        <View style={style.registerView}>
          <View style={style.Viewdir}>
            <TouchableOpacity style={style.registerBackButton} onPress={handleBack}>
              <View style={style.BackButtonReg}>
                <Image source={require('../Assets/Icon/Vector.png')} style={style.registerBackButton} />
              </View>
            </TouchableOpacity>
            <Text style={style.regtext}>Join Now!</Text>
          </View>
          <Text style={style.regtext2}>Please enter your details</Text>
          <View style={style.inputview}>
          <Text style={style.placeholder}>Your Mobile Number</Text>
          <View style={{flexDirection:"row"}}>
            <TextInput
              style={style.inputtype}
              keyboardType='number-pad'
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            <Image source={require('../Assets/Icon/telephone.png')}style={{height:24,width:24,marginLeft:-55,margin:30}}/>
            </View>
            <Text style={style.placeholder2}>Password</Text>
            <View style={{flexDirection:"row"}}>
            <TextInput
              style={style.inputtype}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={!ispasswordVisible}
            />
            <TouchableOpacity onPress={togglePassword}>
              <Image style={{height:18,width:24,marginLeft:-55,margin:30}}
              source={ispasswordVisible ? require('../Assets/Icon/visibility.png'):require('../Assets/Icon/Close01.png')}/>
            </TouchableOpacity>
            </View>
            <Text style={style.placeholder}>Min. 4 Characters</Text>
            <TouchableOpacity style={style.joinbutton}>
                <Text style={style.regtext3}> JOIN NOW</Text>
            </TouchableOpacity>
            <View style={style.Viewdir}>
            <CheckBox
            style={style.CheckBox}
            disabled={false}
            value={isChecked}
            onValueChange={(newValue) => setIsChecked(newValue)}

             />
            <Text style={style.placeholder3}>By Creating An Account You Accept </Text>
            </View>
            <Text style={style.bootomtext}> The Terms And Coundition </Text>
            <View style={style.Viewdir}>
            <Text style={style.placeholder4}>Already Have An Account?</Text>
            <TouchableOpacity onPress={handleloginuser}>
            <Text style={style.logbutton}> LogIn</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
