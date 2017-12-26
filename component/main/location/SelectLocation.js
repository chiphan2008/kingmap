/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import checkLocation from '../../api/checkLocation';
import global from '../../global';
import getApi from '../../api/getApi';

export default class SelectLocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      listCountry:[],
      listCity:[],
      listDistrict:[],
    };
  }
  getCountry(){
    getApi(`${global.url}${'countries'}`)
    .then(arrCountry => {
        this.setState({ listCountry: arrCountry.data });
    })
    .catch(err => console.log(err));
  }

  getCity(id_country){
    getApi(`${global.url}${'cities/'}${id_country}`)
    .then(arrCity => {
      //console.log('arrCity',arrCity);
        this.setState({ listCity: arrCity.data });
    })
    .catch(err => console.log(err));
  }

  getDistrict(id_city){
    getApi(`${global.url}${'districts/'}${id_city}`)
    .then(arrDistrict => {
      //console.log('arrCity',arrCity);
        this.setState({ listDistrict: arrDistrict.data });
    })
    .catch(err => console.log(err));
  }

  componentWillMount(){
    checkLocation().then((e)=>{
      console.log(e)
    });
  }
  render() {
    //const {naviagte} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('SelectCountryScr')}>
        <Text>Chon dia diem ></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
