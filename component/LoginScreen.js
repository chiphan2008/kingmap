/* @flow */

import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import LogoLarge from '../src/icon/logo-large.png';
import FacebookColor from '../src/icon/Facebook_color.png';
import GoogleColor from '../src/icon/Google_color.png';
const {height, width} = Dimensions.get('window');

export default class CountryScreen extends Component {

  render() {
    const {
      container, imgLogo, title, imgSoci,btnWrapSoci,txtInput,
      btn, colorPress,  btnWrap, contentWrap,
    } = styles;
    return (
      <View style={container}>

        <View style={contentWrap}>
              <Image style={imgLogo} source={LogoLarge} />
              <Text style={title}>Login</Text>
              <TextInput style={txtInput} placeholder="Email/ Phone number" placeholderTextColor="#ddd" />
              <TextInput style={txtInput} placeholder="Password" placeholderTextColor="#ddd" />
              <View style={btnWrapSoci}>
              <CheckBox
                center
                title='Remember me'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                
                />
              </View>
              <Text style={[btn,colorPress]}>Login</Text>
              <View style={btnWrapSoci}>
                  <Image style={imgSoci} source={FacebookColor} />
                  <Image style={imgSoci} source={GoogleColor} />
              </View>
        </View>
        <View style={btnWrap}>
            <Text>Ban da co tai khoan? <Text>Dang ky ngay!</Text> </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  btnWrapSoci: {width: 65, justifyContent: 'space-between', flexDirection:'row',},
  btnWrap : { flex : 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'center', },
  contentWrap : { flex : 3,alignItems: 'center',justifyContent: 'center',},
  imgLogo : {
    width : 60,
    height : 60,
    marginBottom: 15,
  },
  imgSoci : {
    width : 30,
    height : 30,
  },
  title : {
    fontSize: 22,
    marginBottom: 20,
  },
  txtInput:{
    borderColor : "#e0e8ed",
    padding:15,
    borderRadius : 5,
    width: width - 50,
    borderWidth: 1,
    marginBottom: 15,
  },
  btn : {
    paddingTop:15,
    paddingBottom:15,
    borderRadius : 5,
    width: width - 50,
    borderWidth: 1,
    marginBottom: 15,
  },
  colorPress : {
    fontSize:18,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#D0021B',
    overflow:'hidden',
    borderColor : "#D0021B",
  },
});
