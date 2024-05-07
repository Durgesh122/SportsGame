import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Deposit_Screen() {
  return (
    <ScrollView>
    <View style={style.Viewcon}>
      <View style={style.viewcon2}>
        <View style={style.view3} >
          <Text style={style.Textsty}>DEPOSIT FUNDS (MOBILE MONEY)</Text>

        </View>
        <View>
          <Text style={style.text2}>Your Mobile Number</Text>
          <TextInput style={style.borderinput} placeholder='Enter A Number'textAlign='center'placeholderTextColor={"black"}/>
        </View>
        <View>
          <View style={style.direction}>
          <Text style={style.text2}>Your Mobile Number</Text>
          <Text style={style.text3}>MIN. 300</Text>
          </View>
          <TextInput style={style.borderinput2} placeholder='Enter A Number'textAlign='center'placeholderTextColor={"black"}/>
          <TouchableOpacity style={style.borderButton}>
            <Text style={{fontSize:15,color:"white",textAlign:"center",padding:5,fontWeight:"bold"}}> DEPOSIT</Text>
          </TouchableOpacity>
        </View>
        <View style={style.view4}> 
      <Text style={style.text2}>DEPOSIT INSTRUCTIONS</Text>
      <Text style={style.text4}>1. Enter the amount you wont to deposit</Text>
      <Text style={style.text4}>2. Click on the deposit button</Text>
      <Text style={style.text4}>3. Check your phone for a Request</Text>
      <Text style={style.text4}>4. Enter your pin to confirm the transaction.</Text>
      <Text style={style.text4}>5. On succcessful payment, you will receive a Confirmatiion</Text>
        
        <Text style={style.text2}> HOW TO DEPOSIT ON PHONE</Text>
        <View style={style.direction}>
          <Image source={require('../Assets/Images/first_1.png')}style={style.imagepay}/>
          <Image source={require('../Assets/Images/first_2.png')}style={style.imagepay}/>
          <Image source={require('../Assets/Images/first_3.png')}style={style.imagepay}/>
          <Image source={require('../Assets/Images/first_4.png')}style={style.imagepay}/>
         </View>
         <Text style={style.text2}>KUWEKA PESA KUPITIA TIGOPESA</Text>
      <Text style={style.text4}>1. Piga *150*01#</Text>
      <Text style={style.text4}>2. Chagua 4 lipa kwa TIGOPESA</Text>
      <Text style={style.text4}>3. Chagua 3 Weka namba ya kampuni/biashara:101010</Text>
      <Text style={style.text4}>4. Weka Namba yako ya Account (Phone numaber)au Receipt(kama unalipia bila account)</Text>
      <Text style={style.text4}>5. Weka kiasi:xx,xxx/= , Na namba ya siri kumalizia</Text>
      
        </View>
       
      </View>
    </View>
    </ScrollView>
  )
}

const style=StyleSheet.create({
  Viewcon:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",

  },
  direction:{
    flexDirection:"row"
  },
  viewcon2:{
    borderRadius:10,
    height:735,
    width:350,
    borderColor:"#7620F3",
    borderWidth:1,
    backgroundColor:"white",
    margin:30,
  

  },
  view3:{
    backgroundColor:"#7620f3",
    height:50,
    width:348,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  Textsty:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center",
    margin:10
  },
  text2:{
    color:"black",
    fontWeight:"bold",
    margin:15,
    marginLeft:12,
    marginBottom:5

  },
  borderinput:{
    borderRadius:10,
    height:50,
    width:320,
    borderWidth:1,
    borderColor:"#FEAE04",
    marginLeft:12 ,
    backgroundColor:"#DFDBEE"
 },
 borderinput2:{
  borderRadius:10,
  height:50,
  width:320,
  borderWidth:1,
  borderColor:"#FEAE04",
  marginLeft:12 ,

},
 text3:{
  color:"black",
  fontWeight:"bold",
  margin:15,
  marginLeft:110,
  marginBottom:5
},
borderButton:{
  borderRadius:10,
  height:35,
  width:320,
  marginLeft:12 ,
  backgroundColor:"#FEAE04",
  margin:10

},
view4:{
  borderTopWidth:1,
  borderColor:"#DFDBEE"
},
text4:{
  color:"black",
  fontWeight:"bold",
  marginLeft:10
},
imagepay:{
  height:40,
  width:40,
  marginLeft:12,
  margin:10
}


})