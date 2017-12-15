/* @flow */

import React, { Component } from 'react';
import { Platform, View, Text, Image, Button, StyleSheet, Dimensions, TextInput } from 'react-native';
//import { CheckBox } from 'react-native-elements';
//import RoundCheckbox from 'rn-round-checkbox';
import LogoHome from '../../src/icon/ic-home/Logo-home.png';
import FacebookColor from '../../src/icon/Facebook_color.png';
import GoogleColor from '../../src/icon/Google_color.png';
const {height, width} = Dimensions.get('window');

export default class CountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    }
  }
  render() {
    const {
      container, imgLogo, title, imgSoci,btnWrapSoci,txtInput,mrgTop,pullR, pullL,
      btn, colorPress,  btnWrap, contentWrap,wrapAdv, rememberClass, forgotpwd
    } = styles;

    return (
      <View style={container}>

        <View style={contentWrap}>
              <Image style={imgLogo} source={LogoLarge} />
              <Text style={title}>LOGIN</Text>
              <View style={mrgTop}>
              <TextInput style={txtInput} selectionColor='#5b89ab' placeholder="Email/ Phone number" placeholderTextColor="#ddd" />
              <TextInput style={txtInput} selectionColor='#5b89ab' placeholder="Password" placeholderTextColor="#ddd" secureTextEntry />
              </View>
              <View style={wrapAdv}>

                    <Text style={rememberClass}>Remember me</Text>
                    <Text style={[rememberClass,forgotpwd]}>Forgot Password</Text>
              </View>
              <Text style={[btn,colorPress]}>LOGIN</Text>
              <View style={[btnWrapSoci,mrgTop]}>
                  <Image style={imgSoci} source={FacebookColor} />
                  <Image style={imgSoci} source={GoogleColor} />
              </View>
        </View>
        <View style={btnWrap}>
            <Text>Do not have an account? <Text style={forgotpwd}>Register now!</Text> </Text>
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
  wrapAdv : {width: width - 50, justifyContent: 'space-between', flexDirection:'row'},
  rememberClass : {
    width : (width - 80)/2,
    marginTop:5,
  },
  pullL : {textAlign: 'left',},
  pullR : {textAlign: 'right',},
  forgotpwd : {textAlign: 'right', color: '#5b89ab'},
  mrgTop:{ marginTop : 15},
  btnWrapSoci: {width: 65, justifyContent: 'space-between', flexDirection:'row',},
  btnWrap : { flex : 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'center', },
  contentWrap : { flex : 3,alignItems: 'center',justifyContent: 'center',},
  imgLogo : {
    width : 60,
    height : 60,
  },
  imgSoci : {
    width : 30,
    height : 30,
  },
  title : {
    fontSize: 22,
    marginTop: 10,
  },
  txtInput:{
    borderColor : "#e0e8ed",
    padding:15,
    borderRadius : 5,
    width: width - 50,
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
    marginTop: 15,
  },
  btn : {
    paddingTop:15,
    paddingBottom:15,
    borderRadius : 5,
    width: width - 50,
    borderWidth: 1,
    marginTop: 15,
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
