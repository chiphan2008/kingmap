
import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
//import util from 'util';
// import screen
import FadeView from './component/FadeView';
import MainScreen from './component/main/MainScreen';
import CategoryScreen from './component/main/home/CategoryScreen';
import LoginScreen from './component/page_user/LoginScreen';
import SignUpScreen from './component/page_user/SignUpScreen';
import ForgotPasswordScreen from './component/page_user/ForgotPasswordScreen';
import VerifyAccountScreen from './component/page_user/VerifyAccountScreen';
import checkLocation from './component/api/checkLocation';
import getApiKey from './component/api/getApiKey';
// const auth_key = {grant_type:'client_credentials',client_id:1,client_secret:'NKbqe8ovfMetW8WYimVN7MtNHSsy6tCo6mm7WU9Y'};
// const Authentication = ()=>{AsyncStorage.setItem('AuthKey', JSON.stringify(auth_key), () => {
//     AsyncStorage.getItem('AuthKey', (err, result) => {
//       return result;
//
//     });
// });
// }
//AsyncStorage.removeItem('@AuthKey:key');
getApiKey();

//
// constructor(props){
//   super(props);
//   this.state = {expires_in:0,token_type:null,access_token:null};
// }

  const App = StackNavigator({
    IntroSrc: {
      screen: FadeView,
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
    CategoryScr: {
      screen: CategoryScreen,
    },

  },
  {
    headerMode: 'none',
    initialRouteName: checkLocation() ? 'MainScr' : 'IntroSrc',
    //initialRouteParams: { someParam: 'Bonjour' }
  });

  export default App;
