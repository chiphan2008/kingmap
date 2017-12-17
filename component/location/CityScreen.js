/* @flow */

import React, { Component } from 'react';
import { Platform, View, Text, Image, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Select, Option} from "react-native-chooser";
import util from 'util';

//import image
import LogoHome from '../../src/icon/ic-home/Logo-home.png';
import bgMap from '../../src/icon/bg-map.png';
const {height, width} = Dimensions.get('window');


export default class CountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false,
      valueCountry : "Vietname",
      valueCity : "Please choose city",
    }
  }

  onSelectCountry(value, label) {
    this.setState({
      valueCountry : value
    });
  }
  onSelectCity(value, label) {
    this.setState({
      valueCity : value
    });
  }
  render() {
    const {navigation} = this.props;
    //console.log("this.props.CityScreen=",util.inspect(this.props.navigation,false,null));
    const {
      container, imgLogo, title, wrapper,bgImg,
      selectBox, selectBoxCountry, selectBoxCity, OptionItem,
      optionListStyle, optionListStyleCountry, optionListStyleCity,
      btn, btnPress, colorPress, colorNext, btnWrap, contentWrap,
    } = styles;
    return (

      <View style={container}>
        <Image source={bgMap} style={bgImg} />
        <View style={wrapper}>
        <View  style={btnWrap}></View>
        <View style={contentWrap}>
              <Image style={imgLogo} source={LogoHome} />
              <Text style={title}>COUNTRY/ CITY</Text>
              <Select
                    onSelect = {this.onSelectCountry.bind(this)}
                    defaultText  = {this.state.valueCountry}
                    style = {[selectBox,selectBoxCountry]}
                    textStyle = {{color:'#5b89ab'}}
                    optionListStyle={[optionListStyle,optionListStyleCountry]}
                    transparent
                    indicatorColor="#5b89ab"
                    indicator="down"
                    indicatorSize={7}
                  >

                  <Option style={OptionItem} value = "vietnam">Vietnam</Option>

              </Select>

              <Select
                    onSelect = {this.onSelectCity.bind(this)}
                    defaultText  = {this.state.valueCity}
                    style = {[selectBox,selectBoxCity]}
                    textStyle = {{color:'#5b89ab'}}
                    optionListStyle={[optionListStyle,optionListStyleCity]}
                    transparent
                    indicatorColor="#5b89ab"
                    indicator="down"
                    indicatorSize={7}
                  >
                  <Option style={OptionItem} value = "johnceena">Johnceena</Option>
                  <Option style={OptionItem} value = "undertaker">Undertaker</Option>
                  <Option style={OptionItem} value = "Daniel">Daniel</Option>
                  <Option style={OptionItem} value = "Roman">Roman</Option>
                  <Option style={OptionItem} value = "Stonecold">Stonecold</Option>
                  <Option style={OptionItem} value = "Rock">Rock</Option>
                  <Option style={OptionItem} value = "Sheild">Sheild</Option>
                  <Option style={OptionItem} value = "Orton">Orton</Option>
              </Select>
        </View>
        <View style={btnWrap}>

        <TouchableOpacity
            style={this.state.pressStatus ? btnPress : btn }
            onPress={() => {navigation.navigate('MainScr')}}

          >
            <Text style={ colorNext }>Next</Text>
            </TouchableOpacity>
        </View>
        </View>
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  bgImg : {
    width,
    height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  btnWrap : { flex : 1,alignItems: 'center' },
  contentWrap : { flex : 3,alignItems: 'center',justifyContent: 'center',},
  imgLogo : {
    width : 60,
    height : 60,
    marginBottom: 15,
  },
  title : {
    fontSize: 22,
    marginBottom: 20,
  },
  selectBox : {
    borderRadius : 5,
    borderWidth : 1,
    borderColor : "#e0e8ed",
    width: width - 50,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
  },
  selectBoxCountry : {
    marginBottom: 10,
  },
  selectBoxCity : {
    marginBottom: 75,
  },
  OptionItem : {
    borderBottomColor: '#e0e8ed',
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  optionListStyle : {
    borderRadius : 5,
    width: width - 50,
    minHeight: 200,
    maxHeight: 200,
    borderColor : "#fff",
    borderWidth : 0,
    marginTop:15,
    backgroundColor: '#fff',
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: '#ddd',
    shadowOpacity: .5,
  },
  optionListStyleCountry : {
    top: Platform.OS === 'ios' ? 113 : 125,
  },
  optionListStyleCity : {
    top: Platform.OS === 'ios' ? 172 : 185,
  },
  btn: {
    paddingTop:15,
    paddingBottom:15,
    borderRadius : 5,
    width: width - 50,
    borderWidth: 1,
    borderColor : "#D0021B",
  },
  btnPress: {
    paddingTop:15,
    paddingBottom:15,
    borderRadius : 5,
    width: width - 50,
    borderWidth: 1,
    borderColor : "#D0021B",
    backgroundColor: '#D0021B',
  },
  colorNext : {
    color: '#D0021B',
    textAlign: 'center',
  },
  colorPress : {
    color: '#fff',
    textAlign: 'center',
  },
});
