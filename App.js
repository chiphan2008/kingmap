/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import IntroScreen from './component/IntroScreen';
import CountryScreen from './component/CountryScreen';
import CityScreen from './component/CityScreen';
import LoginScreen from './component/LoginScreen';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#D0021B',
  },

});
