/* @flow */

import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import {Select, Option} from "react-native-chooser";
import LogoLarge from '../src/icon/logo-large.png';
const {height, width} = Dimensions.get('window');

export default class CountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value : "Vietname"}
  }
  onSelect(value, label) {
    this.setState({value : value});
  }
  render() {
    const {container, imgLogo, title, selectBox, btnSkip, btnNext, btnWrap} = styles;
    return (
      <View style={container}>
        <Image style={imgLogo} source={LogoLarge} />
        <Text style={title}>COUNTRY/ CITY</Text>
        <Select
              onSelect = {this.onSelect.bind(this)}
              defaultText  = {this.state.value}
              style = {selectBox}
              textStyle = {{color:'#5b89ab'}}
              optionListStyle={{ borderColor : "#D0021B", width: 200, marginTop:20}}
              transparent
              indicatorColor="#5b89ab"
              indicator="down"
            >
            <Option value = {{name : "azhar"}}>Azhar</Option>
            <Option value = "johnceena">Johnceena</Option>
            <Option value = "undertaker">Undertaker</Option>
            <Option value = "Daniel">Daniel</Option>
            <Option value = "Roman">Roman</Option>
            <Option value = "Stonecold">Stonecold</Option>
            <Option value = "Rock">Rock</Option>
            <Option value = "Sheild">Sheild</Option>
            <Option value = "Orton">Orton</Option>
        </Select>

        <View style={btnWrap}>
          <Text style={btnSkip} >Skip</Text>
          <Text style={btnNext} >Next</Text>

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
    fontSize: 22,
    marginBottom: 20,
  },
  selectBox : {
    borderRadius : 5,
    borderWidth : 1,
    borderColor : "#e0e8ed",
    width: width - 50,
    marginBottom: 20,
  },
  btnWrap : {
    flexDirection: 'row',
  },
  btnSkip : {
    padding:10,
    color: '#D0021B',
    borderWidth: 1,
    borderColor : "#D0021B",
    borderRadius : 5,
    width : (width - 80)/2,
    marginRight: 20,
    textAlign: 'center',
  },
  btnNext : {
    padding:10,
    color: '#fff',
    borderWidth: 1,
    borderColor : "#fff",
    backgroundColor: '#D0021B',
    borderRadius : 5,
    width : (width - 80)/2,
    textAlign: 'center',
  },
});
