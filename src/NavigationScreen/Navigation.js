import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import WithoutLogin from '../Screens/WithoutLogin';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LogInUser from '../Screens/LoginUser';
import Forgotten from '../Screens/Forgotten';
import ProfileScreen from '../Screens/ProfileScreen';
import My_Bets_Screen from '../Profile_Screen/My_Bets_Screen';
import Deposit_Screen from '../Profile_Screen/Deposit_Screen';
import Withdraw_screen from '../Profile_Screen/Withdraw_screen';
import Help_screen from '../Profile_Screen/Help_screen';
import Transactions_screen from '../Profile_Screen/Transactions_screen';
import How_To_Play from '../../BikoSports/How_To_Play';

const stack = createNativeStackNavigator()
export default function Navigation() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName='SplashScreen'>
            <stack.Screen name='Splash'component={SplashScreen} options={{headerShown:false}}/>
            <stack.Screen name='WithoutLogin'component={WithoutLogin} options={{headerShown:false}}/>
            <stack.Screen name='RegisterScreen'component={RegisterScreen} options={{headerShown:false}}/>
            <stack.Screen name='LoginScreen'component={LoginScreen}options={{headerShown:false}}/>
            <stack.Screen name='LoginUser'component={LogInUser} options={{headerShown:false}}/>
            <stack.Screen name='Forgotten'component={Forgotten}options={{headerShown:false}}/>
            {/* <stack.Screen name='ProfileScreen'component={ProfileScreen}options={{headerShown:false}}/> */}
            <stack.Screen name='My_Bets_Screen'component={My_Bets_Screen} options={{headerShown:false}}/>
            <stack.Screen name='Deposit_Screen'component={Deposit_Screen} options={{headerShown:false}}/>
            <stack.Screen name='Withdraw_screen'component={Withdraw_screen} options={{headerShown:false}}/>
            <stack.Screen name='Help_screen'component={Help_screen}options={{headerShown:false}}/>
            <stack.Screen name='Transactions_screen'component={Transactions_screen} options={{headerShown:false}}/>
            <stack.Screen name='How_To_Play'component={How_To_Play}options={{headerShown:false}}/>
        </stack.Navigator>
    </NavigationContainer>
  )
}