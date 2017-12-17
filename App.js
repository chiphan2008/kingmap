import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import util from 'util';
// import screen
import FadeView from './component/FadeView';
import LoginScreen from './component/page_user/LoginScreen';
import MainScreen from './component/main/MainScreen';
import SignUpScreen from './component/page_user/SignUpScreen';
import ForgotPasswordScreen from './component/page_user/ForgotPasswordScreen';
import VerifyAccountScreen from './component/page_user/VerifyAccountScreen';

import './component/global';
// let auth_key = {grant_type:'client_credentials',client_id:1,client_secret:'NKbqe8ovfMetW8WYimVN7MtNHSsy6tCo6mm7WU9Y'};
// AsyncStorage.setItem('AuthKey', JSON.stringify(auth_key), () => {
//     AsyncStorage.getItem('AuthKey', (err, result) => {
//       global.auth_key_client = result;
//     });
// });
console.log('global.auth_key_client',global.auth_key_client);

const App = StackNavigator({
  // IntroSrc: {
  //   screen: FadeView,
  // },

  MainScr: {
    screen: MainScreen,
    navigationOptions: {
    //headerMode:'none',

      //headerTitle: '<Header />',
      //header: <Header  />,
      //headerStyle: styles.header,
      //headerTitleStyle: styles.colorhead,
    },
  },
},{headerMode: 'none'});

export default App;
