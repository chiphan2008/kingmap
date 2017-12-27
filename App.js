
import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, AsyncStorage, Image
} from 'react-native';
import { StackNavigator,TabNavigator,Animated, } from 'react-navigation';
//import util from 'util';
import HomeTab from './component/main/home/HomeTab';
import LocationTab from './component/main/location/LocationTab';
import ListLocation from './component/main/location/ListLocation';
import DistributeTab from './component/main/location/DistributeTab';
import NotifyTab from './component/main/notify/NotifyTab';
import PersonalTab from './component/main/personal/PersonalTab';
//import icon tabBarIcon
import homeIC from './src/icon/ic-home/ic-home.png';
import locationIC from './src/icon/ic-home/ic-location.png';
import notifyIC from './src/icon/ic-home/ic-notification.png';
import personalIC from './src/icon/ic-home/ic-personal.png';

// import screen
import FadeView from './component/FadeView';
import MainScreen from './component/main/MainScreen';
import CategoryScreen from './component/main/home/CategoryScreen';
import ListCategory from './component/main/home/ListCategory';

import SelectLocation from './component/main/location/SelectLocation';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const HomeScreen = StackNavigator({
  HomeTabs: { screen: HomeTab },
  CatScr: { screen: CategoryScreen },
  ListCatScr: { screen: ListCategory },
  OtherCatScr: { screen: DistributeTab },
},{
  headerMode: 'none',
});

const LocationScreen = StackNavigator({
  LocTab: { screen: LocationTab },
  ListLocScr: { screen: ListLocation },
},{
  headerMode: 'none',

});

const RootTabs = TabNavigator({
  HomeT: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image source={homeIC} style={[styles.icon, {tintColor}]} />
      ),
    },
  },
  LocationT: {
    screen: LocationScreen,//LocationTab,//,DistributeTab
    navigationOptions: {
      tabBarLabel: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <Image source={locationIC} style={[styles.icon, {tintColor}]} />
      ),
      tabBarVisible:true,
    },
  },
  NotifyT: {
    screen: NotifyTab,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ tintColor }) => (
        <Image source={notifyIC} style={[styles.icon, {tintColor}]} />
      ),
    },
  },
  PersonalT: {
    screen: PersonalTab,
    navigationOptions: {
      tabBarLabel: 'Personal',
      tabBarIcon: ({ tintColor }) => (
        <Image source={personalIC} style={[styles.icon, {tintColor}]} />
      ),
      style : {
        borderBottomWidth:0,
      },
    },
  },

}, {
  initialRouteName:'LocationT',
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: true,
  tabBarSelected: 'Home',
  tabBarOptions: {
    showLabel:true,
    showIcon:true,
    activeTintColor: '#D0021B',
    inactiveTintColor: '#777E8A',
    activeBackgroundColor:'#FFFEFF',
    borderBottomWidth: 0,
    style : {
        backgroundColor:'#FFFEFF',
    },
    indicatorStyle: {
        backgroundColor: 'transparent',
    },
  },
});


const initApp =  AsyncStorage.getItem('@LocationKey:key');

const App = StackNavigator(
  {
  IntroSrc: {
    screen: FadeView,
  },
  MainScr: {
    screen: RootTabs,
  },

},
{
  headerMode: 'none',
  initialRouteName: initApp!==null ? 'MainScr' : 'IntroSrc',
  //initialRouteParams: { someParam: 'Bonjour' }
});

export default App ;
