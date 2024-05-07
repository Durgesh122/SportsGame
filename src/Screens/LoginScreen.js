import { View, Text, ScrollView, SafeAreaView,Image, Button, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import style from '../Style/Styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../TabbarScreen/HomeScreen'
import MenuScreen from '../TabbarScreen/MenuScreen'
import LiveScreen from '../TabbarScreen/LiveScreen'
import Jackpotscreen from '../TabbarScreen/Jackpotscreen'
import SearchScreen from '../TabbarScreen/SearchScreen'
import Slip from '../TabbarScreen/slpScreen'
import LinearGradient from 'react-native-linear-gradient'

const top = createMaterialTopTabNavigator()
export default function LoginScreen({navigation}) {
  const [modalVisible,setModalVisible]=useState('')
  const handleLogout=()=>{
    navigation.goBack('WithoutLogin')
  }
  const handledeposit=()=>{
    navigation.navigate("Deposit_Screen")
  }
  const  handlemybets=()=>{
    navigation.navigate("My_Bets_Screen")
  }
  const  handlemyDepo=()=>{
    navigation.navigate("Deposit_Screen")
  }
  const  handlemywith=()=>{
    navigation.navigate("Withdraw_screen")
  }
  const  handlemytrans=()=>{
    navigation.navigate("Transactions_screen")
  }
  const  handlemyhelp=()=>{
    navigation.navigate("Help_screen")
  }
  



    return (
    <SafeAreaView style={{flex:1}}>
    <View style={style.contener}>
    <View style={style.ViewContener}>
    <View style={style.HedaerView}>
      <Image source={require('../Assets/Images/logo1.png')}/>
      <Text style={style.boredrtext}>TSH 102.00</Text>
      <TouchableOpacity style={style.Button}onPress={handledeposit}>
        <Text style={style.boredrtext2}>Deposit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setModalVisible(true)}>
      <Image source={require('../Assets/Images/Profile2.png')}style={style.BorderImage}/>
      </TouchableOpacity>
    </View> 
    <Modal 
    animationType='fade'
    visible={modalVisible}
    onRequestClose={()=>setModalVisible(false)}
    transparent={true}>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
      <View style={style.ModalVisible}>
        <View style={style.modal2}>
        <LinearGradient colors={['rgba(39, 6, 85, 0.8)', 'rgba(118, 32, 243, 0.8)']} style={{ flex: 1 }}>
         <View style={style.modalsty}>
        <TouchableOpacity onPress={handlemybets}>
            <Image source={require('../Assets/Icon/ballot.png')}/>
           <Text style={style.modaltext}>MY BETS</Text>
           </TouchableOpacity>
        </View>
         <View style={style.modalsty}>
          <TouchableOpacity onPress={handlemyDepo}>
          <Image source={require('../Assets/Icon/add_business.png')}/>
          <Text style={style.modaltext}>DEPOSIT</Text>
          </TouchableOpacity>
         </View>
         <View style={style.modalsty}>
            <TouchableOpacity onPress={handlemywith}>
            <Image source={require('../Assets/Icon/blance.png')}/>
            <Text style={style.modaltext}>WITHDRAW</Text>
            </TouchableOpacity>
         </View>
         <View style={style.modalsty}>
          <TouchableOpacity handlemytrans>
            <Image source={require('../Assets/Icon/transfer_within_a_station.png')}/>
           <Text style={style.modaltext}>TRANSACTIONS</Text>
           </TouchableOpacity>
         </View>
         <View style={style.modalsty}>
          <TouchableOpacity onPress={handlemyhelp}>
            <Image source={require('../Assets/Icon/contact_support.png')}/>
            <Text style={style.modaltext}>HELP</Text>
            </TouchableOpacity>
         </View>
         <View style={style.modalsty}>
            <TouchableOpacity onPress={handleLogout}>
            <Image source={require('../Assets/Icon/logout.png')}/>
            <Text style={style.modaltext}>LOGOUT</Text>
           </TouchableOpacity>
         </View>
         </LinearGradient>

        </View>


      </View>
      </TouchableWithoutFeedback>

    </Modal>
   </View>
   <View style={{flex:1,borderBottomWidth:1,borderColor:'white'}}>
  
     <top.Navigator  screenOptions={{
        tabBarActiveTintColor: '#FEAE04',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 8 },
        tabBarStyle: { backgroundColor: '#6D2299' }
      }}>
      <top.Screen name='Home'component={HomeScreen} options={{tabBarIcon:()=>{
        return <Image source={require('../Assets/Icon/Home.png')} />
      }}} />
      <top.Screen name='Menu'component={MenuScreen}options={{tabBarIcon:()=>{
        return <Image source={require('../Assets/Icon/Menu.png')} />
      }}} />
      <top.Screen name='Live'component={LiveScreen}options={{tabBarIcon:()=>{
        return <Image source={require('../Assets/Icon/live.png')} />
      }}} />
      <top.Screen name='Jackpot'component={Jackpotscreen}options={{tabBarIcon:()=>{
        return <Image source={require('../Assets/Icon/jackpot.png')} />
      }}} />
      <top.Screen name='Search'component={SearchScreen}options={{tabBarIcon:()=>{
        return <Image source={require('../Assets/Icon/Search.png')} />
      }}} />
      <top.Screen name='SLIP'component={Slip}options={{tabBarIcon:()=>{
        return <Image source={require('../Assets/Icon/contract.png')}/>
      }}} />
      </top.Navigator>
    </View>
    </View>
    </SafeAreaView>
    
  )
}