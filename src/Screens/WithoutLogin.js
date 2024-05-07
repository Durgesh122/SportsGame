import React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const duration = 6000;
const easing = Easing.bezier(0.50, -0.10, 0.50, 1);

export default function WithoutLogin({navigation}) {
  const handleLogin =()=>{
    navigation.navigate("LoginUser")
  }
  const handleJoin =()=>{
    navigation.navigate("RegisterScreen")
  }
  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>

        <Image style={styles.imagesty}source={require('../Assets/Images/banner1.png')}/>
      </Animated.View>
      <View>
        <Image source={require('../Assets/Images/Logo2.png')}/>
        <Text style={styles.Textstyle}> Cheza Kirahisi, </Text>
        <Text style={styles.Textstyle}> Shinda Ulipwe Fasta </Text>
        <View style={{flexDirection:"row",marginLeft:70}}>
        <Text style={styles.Textstyle}> na</Text>
        <Image style={styles.bikoicon} source={require('../Assets/Images/logo1.png')}/>
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttontext1}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleJoin}>
          <Text style={styles.buttontext2}>JOIN NOW</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D2299',
    alignItems:"center",
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'yellow',
    borderRadius: 10,
    margin:60,

  },
  imagesty:{
    height:"100%",
    width:"100%",
    borderRadius:10
  },
  Textstyle:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center",
    color:"white"
  },
  bikoicon:{
    margin:12
  },
  button1:{
    borderRadius:10,
    borderWidth:1,
    height:50,
    width:300,
    margin:10,
    backgroundColor:"#FEAE04"
  },
  button2:{
    borderRadius:10,
    borderWidth:1,
    height:50,
    width:300,
    margin:10,
    borderColor:"yellow",
    
  },
  buttontext1:{
    textAlign:"center",
    padding:12,
    color:"white",
    fontWeight:"bold"
    
  },
  buttontext2:{
    textAlign:"center",
    padding:12,
    color:"white",
    fontWeight:"bold"
  }
});