/* @flow */

import React, { Component } from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';

import LogoLarge from '../src/icon/logo-large.png';

export default class CountryScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'Chon Quoc Gia',
    }
  }
  updateUser = (user) => {
      this.setState({ user: user })
  }
  render() {
    const {container, imgLogo, title} = styles;
    return (
      <View style={container}>
        <Image style={imgLogo} source={LogoLarge} />
        <Text style={title}>COUNTRY/ CITY</Text>
        <View >

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo : {
    width : 60,
    height : 60,
    marginBottom: 15,
  },
  title : {
    fontSize: 18,
  },
});
