/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import styles from '../../styles';
import MapView from 'react-native-maps';

import sortDown from '../../../src/icon/ic-white/sort-down.png';
import arrowLeft from '../../../src/icon/ic-white/arrow-left.png';
import listIC from '../../../src/icon/ic-white/ic-list.png';
import logoMap from '../../../src/icon/Logo-map.png';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCat : false,
      region: {
          latitude: 10.780843591000904,
          longitude: 106.67830749999996,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      markers:[{
        id : 1,
        latlng: {latitude: 10.780843591000904,
        longitude: 106.67830749999996,},
        title: 'AAA',
        description:'AAA',
      },],
    }
  }
  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const {navigation} = this.props;
    //console.log("this.props.Hometab=",util.inspect(this.props.navigation,false,null));
    const {
      container,
      headCatStyle, headContent,wrapIcRight,
      popover,show,hide,overLayout,colorTextPP,listOver,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,

    } = styles;
    //onRegionChange={this.onRegionChange}
    return (
      <View style={container}>
        <View style={headCatStyle}>
            <View style={headContent}>
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
                </TouchableOpacity>
                <TouchableOpacity
                      style={{alignItems:'center'}}
                      onPress={()=>this.setState({showCat :!this.state.showCat})}
                      >
                      <Text style={{color:'white',fontSize:16}}>Food</Text>
                      <Image source={sortDown} style={{width:14, height:14}} />
                </TouchableOpacity>
                <Image source={listIC} style={{width:16, height:20}} />
            </View>
        </View>

        <View style={[popover, this.state.showCat ? show : hide]}>

            <View style={overLayout}>
                <View style={listOver}>

                    <Text style={colorTextPP}>Địa điểm</Text>
                </View>
                <View style={listOver}>

                    <Text style={colorTextPP}>Địa điểm</Text>
                </View>
                <View style={listOver}>

                    <Text style={colorTextPP}>Địa điểm</Text>
                </View>
                <View style={listOver}>

                    <Text style={colorTextPP}>Địa điểm</Text>
                </View>

            </View>

        </View>


        <MapView
            style={{flex:1}}
            region={this.state.region}
            onRegionChange={this.onRegionChange.bind(this)}
          >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              image={logoMap}
            />
          ))}
          </MapView>

      </View>
    );
  }
}
