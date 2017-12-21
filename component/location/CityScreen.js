/* @flow */

import React, { Component } from 'react';
import { Platform, View, Text, Image, Button, StyleSheet, Dimensions, TouchableOpacity,AsyncStorage } from 'react-native';
import {Select, Option} from "react-native-chooser";
import util from 'util';
import getApi from '../api/getApi';
import global from '../global';
//import image
import LogoHome from '../../src/icon/ic-home/Logo-home.png';
import bgMap from '../../src/icon/bg-map.png';
const {height, width} = Dimensions.get('window');


export default class CountryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressStatus: false,
      listCountry : [],
      listCity : [],
      valueCountry : "Chọn quốc gia",
      valueCity : "Chọn tỉnh thành phố",
    };


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
  save(){
    if(this.state.valueCountry !=='Chọn quốc gia' && this.state.valueCity !=='Chọn tỉnh thành phố'){
      AsyncStorage.setItem('@CountryLocationKey:key', JSON.stringify({name:this.state.valueCountry}));
      AsyncStorage.setItem('@CityLocationKey:key', JSON.stringify({name:this.state.valueCity}));
      console.log('this.state.valueCountry',this.state.valueCountry)
      this.props.navigation.navigate('MainScr');
    }

  }
  componentWillMount() {
      // const idType = this.props.category.id;
      getApi(global.url+'countries')
      .then(arrCountry => {
        //console.log('arrCountry',arrCountry.data);
          this.setState({ listCountry: this.state.listCountry = arrCountry.data });
          for (let cityObject of arrCountry.data) {
            getApi(global.url+'cities/'+ cityObject.id)
            .then(arrCity => {
              this.setState({ listCity: this.state.listCity = arrCity.data });
            });
          }
      })
      .catch(err => console.log(err));
  }

  render() {

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
                  {this.state.listCountry.map((e)=>(
                    <Option value={e.name} key={e.id}>{e.name}</Option>
                  ))}
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
                  {this.state.listCity.map((e)=>(
                    <Option value={e.name} key={e.id}>{e.name}</Option>
                  ))}

              </Select>
        </View>
        <View style={btnWrap}>

        <TouchableOpacity
            style={this.state.pressStatus ? btnPress : btn }
            onPress={this.save.bind(this)}

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
