/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput} from 'react-native';
const {height, width} = Dimensions.get('window');
import bgMap from '../../../src/icon/bg-map.png';
import logoTop from '../../../src/icon/ic-white/Logo-ngang.png';
import infoIC from '../../../src/icon/ic-white/ic-analysis.png';
import socialIC from '../../../src/icon/ic-white/ic-social.png';

import {Select, Option} from "react-native-chooser";

export default class Hometab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueLang : "VIE",
    }
  }
  onSelectLang(value, label) {
    this.setState({
      valueLang : value
    });
  }
  render() {
    const {
      container, bgImg,
      headStyle, headContent,imgLogoTop,imgSocial, imgInfo,wrapIcRight,
      selectBox,optionListStyle,OptionItem,inputSearch,
    } = styles;
    return (
      <View style={container}>
      <Image source={bgMap} style={bgImg} />
        <View style={headStyle}>
            <View style={headContent}>
            <Select
                  onSelect = {this.onSelectLang.bind(this)}
                  defaultText  = {this.state.valueLang}
                  style = {selectBox}
                  textStyle = {{color:'#fff'}}
                  optionListStyle={optionListStyle}
                  indicatorColor="#fff"
                  indicator="down"
                  indicatorSize={7}
                  transparent
                >
                <Option style={OptionItem} value ="VIE">VIE</Option>
                <Option value="ENG">ENG</Option>
            </Select>
            <Image source={logoTop} style={imgLogoTop} />
                <View style={wrapIcRight}>
                    <Image source={infoIC} style={imgInfo} />
                    <Image source={socialIC} style={imgSocial} />
                </View>

          </View>
          <TextInput underlineColorAndroid='transparent' placeholder="Find place" style={inputSearch} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  bgImg : {
    width,height,position: 'absolute',justifyContent: 'center',alignItems: 'center',
  },
  headStyle : {
      backgroundColor: '#D0021B',
      paddingTop: Platform.OS==='ios' ? 25 : 10,
      alignItems: 'center',
      height: 110,
  },
  headContent : {
      width: width - 40,
      justifyContent: 'space-between',
      flexDirection: 'row',
  },
  imgLogoTop : {
      width: 176,
      height: 32,
  },
  wrapIcRight:{
    width:55,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 7,
  },
  imgInfo : {
      width: 20,
      height: 20,
  },
  imgSocial : {
      width: 21,
      height: 23,
  },
  selectBox : {
    width:50,
    borderColor:'transparent',
    position:'relative',
    paddingLeft:0,
  },
  optionListStyle :{
    backgroundColor:'#fff',
    borderColor:'transparent',
    position:'absolute',
    width: 55,
    height:60,//50
    top:53,
    left:10,
  },
  OptionItem : {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  inputSearch : {
    marginTop: 10,
    width:width-40,
    backgroundColor:'#fff',
    borderRadius:5,
    padding:7,
    textAlign:'center',
  },
});
