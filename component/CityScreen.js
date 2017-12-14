/* @flow */

import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import {Select, Option} from "react-native-chooser";
import LogoLarge from '../src/icon/logo-large.png';
const {height, width} = Dimensions.get('window');

export default class CountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false,
      valueCountry : "Việt Nam",
      valueCity : "Chọn Thành Phố",
    }
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
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
    const {
      container, imgLogo, title,
      selectBox, selectBoxCountry, selectBoxCity, OptionItem,
      optionListStyle, optionListStyleCountry, optionListStyleCity,
      btn, btnPress, colorPress, colorNext, btnWrap, contentWrap,
    } = styles;
    return (
      <View style={container}>
        <View  style={btnWrap}></View>
        <View style={contentWrap}>
              <Image style={imgLogo} source={LogoLarge} />
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
                  <Option style={OptionItem} value = {{name : "azhar"}}>Azhar</Option>
                  <Option style={OptionItem} value = "johnceena">Johnceena</Option>
                  <Option style={OptionItem} value = "undertaker">Undertaker</Option>
                  <Option style={OptionItem} value = "Daniel">Daniel</Option>
                  <Option style={OptionItem} value = "Roman">Roman</Option>
                  <Option style={OptionItem} value = "Stonecold">Stonecold</Option>
                  <Option style={OptionItem} value = "Rock">Rock</Option>
                  <Option style={OptionItem} value = "Sheild">Sheild</Option>
                  <Option style={OptionItem} value = "Orton">Orton</Option>
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
                  <Option style={OptionItem} value = {{name : "azhar"}}>Azhar</Option>
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
        <TouchableHighlight
            style={this.state.pressStatus ? btnPress : btn }
            onHideUnderlay={this._onHideUnderlay.bind(this)}
            onShowUnderlay={this._onShowUnderlay.bind(this)}
            activeOpacity={0}
          >
            <Text style={ this.state.pressStatus ? colorPress : colorNext }>Next</Text>
            </TouchableHighlight>
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
  btnWrap : { flex : 1 },
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
    marginBottom: 15,
  },
  selectBoxCity : {
    marginBottom: 80,
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
    height: 200,
    borderColor : "#fff",
    marginTop:15,
    backgroundColor: '#fff',
    shadowOffset:{  width: 2,  height: 2,  },
    shadowColor: '#ddd',
    shadowOpacity: .5,
  },
  optionListStyleCountry : {
    top: 110,
  },
  optionListStyleCity : {
    top: 172,
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
