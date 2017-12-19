/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { TabNavigator,StackNavigator } from 'react-navigation';
import util from 'util';
//import tab component
import CategoryScreen from './home/CategoryScreen';

import HomeTab from './home/HomeTab';
import LocationTab from './location/LocationTab';
import NotifyTab from './notify/NotifyTab';
import PersonalTab from './personal/PersonalTab';
//import icon tabBarIcon
import homeIC from '../../src/icon/ic-home/ic-home.png';
import locationIC from '../../src/icon/ic-home/ic-location.png';
import notifyIC from '../../src/icon/ic-home/ic-notification.png';
import personalIC from '../../src/icon/ic-home/ic-personal.png';

const RootTabs = TabNavigator({
  HomeT: {
    screen: HomeTab,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image source={homeIC} style={[styles.icon, {tintColor}]} />
      ),
    },
  },

  LocationT: {
    screen: LocationTab,
    navigationOptions: {
      tabBarLabel: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <Image source={locationIC} style={[styles.icon, {tintColor}]} />
      ),
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
  //initialRouteName:'LocationT',
  tabBarPosition: 'bottom',
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

export default class MainScreen extends Component {

  render() {
    //console.log("MainScr=",util.inspect(this.props.nav,false,null))
    return (
      <View style={styles.container}>
        <RootTabs  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
