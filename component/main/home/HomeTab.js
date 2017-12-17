/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput} from 'react-native';
const {height, width} = Dimensions.get('window');
import bgMap from '../../../src/icon/bg-map.png';
import logoTop from '../../../src/icon/ic-white/Logo-ngang.png';
import searchIC from '../../../src/icon/ic-gray/ic-search.png';
import infoIC from '../../../src/icon/ic-white/ic-analysis.png';
import socialIC from '../../../src/icon/ic-white/ic-social.png';

import plusIC from '../../../src/icon/ic-home/ic-plus.png';
import hotelOval from '../../../src/icon/ic-home/Oval-hotel.png';
import bankOval from '../../../src/icon/ic-home/Oval-bank.png';
import foodOval from '../../../src/icon/ic-home/Oval-food.png';
import logoHome from '../../../src/icon/ic-home/Logo-home.png';
import entertainmentOval from '../../../src/icon/ic-home/Oval-entertainment.png';
import coffeeOval from '../../../src/icon/ic-home/Oval-coffee.png';
import shopOval from '../../../src/icon/ic-home/Oval-shop.png';

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
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat
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
          <Image style={{width:16,height:16,top:-28,left:-50}} source={searchIC} />
        </View>

        <View style={wrapContent}>
              <View style={leftContent}>
                  <Image style={imgContent} source={hotelOval} />
                  <Text style={labelCat}>Hotel</Text>
                  <Image style={imgContent} source={bankOval} />
                  <Text style={labelCat}>Bank</Text>
              </View>
              <View style={middleContent}>
                  <Image style={imgContent} source={foodOval} />
                  <Text style={labelCat}>Food</Text>
                  <Image style={imgContent} source={logoHome} />
                  <Text style={labelCat}>Other</Text>
                  <Image style={imgContent} source={entertainmentOval} />
                  <Text style={labelCat}>Entertainment</Text>
              </View>
              <View style={rightContent}>
                  <Image style={imgContent} source={coffeeOval} />
                  <Text style={labelCat}>Drink</Text>
                  <Image style={imgContent} source={shopOval} />
                  <Text style={labelCat}>Shop</Text>
              </View>
        </View>

        <Image source={plusIC} style={{width:50,height:50,alignItems:'flex-start',bottom:10}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  bgImg : {
    width,height,position: 'absolute',justifyContent: 'center',alignItems: 'center',resizeMode : 'cover',
  },
  headStyle : {
      backgroundColor: '#D0021B',paddingTop: Platform.OS==='ios' ? 25 : 10, alignItems: 'center',height: 110,
  },
  inputSearch : {
    marginTop: 8,width:width-40,backgroundColor:'#fff',borderRadius:5,padding:10,textAlign:'center',
  },
  headContent : {
      width: width - 40,justifyContent: 'space-between',flexDirection: 'row',
  },
  imgLogoTop : {
      width: 138,height: 25,
  },
  imgContent : {
      width: 65,height: 65,marginBottom:10,
  },
  labelCat :{
    marginBottom:40,backgroundColor:'transparent',
  },
  wrapIcRight:{
    width:55,justifyContent: 'space-between',flexDirection: 'row',marginTop: 7,
  },
  imgInfo : {
      width: 20,height: 20,
  },
  imgSocial : {
      width: 21,height: 23,
  },
  selectBox : {
    width:50,borderColor:'transparent',position:'relative',paddingLeft:0,paddingTop:5,
  },
  optionListStyle :{
    backgroundColor:'#fff',borderColor:'transparent',position:'absolute',width: 55,  height:60,top:48,left:10,
  },
  OptionItem : {
    paddingTop: 0,paddingBottom: 0,marginTop: 0,marginBottom: 0,
  },
  wrapContent :{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
  },
  leftContent :{
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
  },
  rightContent :{
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
  },
  middleContent :{
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
  },

});
