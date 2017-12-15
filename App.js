/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import FadeView from './component/FadeOutView';

import LoginScreen from './component/page_user/LoginScreen';
import MainScreen from './component/main/MainScreen';
import SignUpScreen from './component/page_user/SignUpScreen';
import ForgotPasswordScreen from './component/page_user/ForgotPasswordScreen';
import VerifyAccountScreen from './component/page_user/VerifyAccountScreen';
//const {height, width} = Dimensions.get('window');
const IntroScr = ({ navigation }) => (
      <FadeView navigation={navigation} />
);
const MainScr = ({ navigation }) => (
      <MainScreen navigation={navigation} />
);

const App = StackNavigator({
  IntroSrc: {
    screen: IntroScr,
    navigationOptions: {
      //headerVisible: false,
      //headerMode:'none',
      //headerTitle: '<Header />',
      //header: <Header  />,
      //headerStyle: styles.header,
      //headerTitleStyle: styles.colorhead,
    },
  },
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
},
{
  headerMode: 'none',

 });

export default App;
