1/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import getApi from '../../api/getApi';
import global from '../../global';
import styles from '../../styles';
import MapView from 'react-native-maps';

import sortDown from '../../../src/icon/ic-white/sort-down.png';
import arrowLeft from '../../../src/icon/ic-white/arrow-left.png';
import listIC from '../../../src/icon/ic-white/ic-list.png';
import logoMap from '../../../src/icon/Logo-map.png';
import plusIC from '../../../src/icon/ic-home/ic-plus.png';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curLocation:{
        latitude:10.7808,
        longitude: 106.6783,
        latlng: '10.7808,106.6783',
      },
      showCat : false,
      showInfoOver : true,
      region: {
          latitude: 10.780843591000904,
          longitude: 106.67830749999996,
          latitudeDelta: 0.0062,
          longitudeDelta: 0.0021,
        },
      markers:[{
        id : 1,
        latlng: {latitude: 10.780843591000904,longitude: 106.67830749999996,},
        name: '',
        address:'',
        avatar:'',
      },],
    }

  }
  onRegionChange(region) {
    this.setState({ region });
  }
  getCategory(idcat,loc){
    getApi(global.url+'content-by-category?category='+idcat+'&location='+loc)
    .then(arrData => {
      //console.log('parseFloat(marker.lat)',arrData)
        this.setState({ markers: arrData.data });
    })
    .catch(err => console.log(err));
  }
  componentWillMount(){
    this.getCategory(this.props.navigation.state.params.idCat,this.state.curLocation.latlng);
  }
  render() {
    //console.log('this.state.markers[0].lat',this.state.markers)
    const {navigate} = this.props.navigation;
    const { name, sub_cat } = this.props.navigation.state.params;
    //console.log("this.props.CategoryScreen=",util.inspect(this.props.navigation.state.key,false,null));
    const {
      container,
      headCatStyle, headContent,wrapIcRight,plusStyle,imgPlusStyle,
      popover,show,hide,overLayoutCat,colorText,listCatOver,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,
      imgFlatItem,catInfoOver,txtTitleOver,txtAddrOver,wrapInfoOver,
    } = styles;
    //onRegionChange={this.onRegionChange}
    return (
      <View style={container}>
        <View style={headCatStyle}>
            <View style={headContent}>
                <TouchableOpacity onPress={()=> navigate('MainScr')}>
                <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
                </TouchableOpacity>
                <TouchableOpacity
                      style={{alignItems:'center'}}
                      onPress={()=>this.setState({showCat :!this.state.showCat,showInfoOver:false})}
                      >
                      <Text style={{color:'white',fontSize:16}}>{name}</Text>
                      <Image source={sortDown} style={{width:14, height:14}} />
                </TouchableOpacity>
                <Image source={listIC} style={{width:16, height:20}} />
            </View>
        </View>

        <View style={[popover, this.state.showCat ? show : hide]}>

            <View style={overLayoutCat}>
            {sub_cat.map((e)=>
              (<TouchableOpacity key={e.id} style={listCatOver}>
                  <Text style={colorText}>{e.name}</Text>
              </TouchableOpacity>))
            }
            </View>

        </View>


        <MapView
            style={{flex:1}}
            region={this.state.region}
            onRegionChange={this.onRegionChange.bind(this)}
          >
          {this.state.markers.map(marker => {(
            <MapView.Marker
              key={marker.id}
              coordinate={{latitude: parseFloat(marker.lat), longitude: parseFloat(marker.lng)}}
              title={marker.name}
              description={marker.address}
              image={logoMap}
              zoomEnabled
            />
          )})}
          <MapView.Marker
            coordinate={this.state.curLocation}
          />
          </MapView>
          <TouchableOpacity style={plusStyle}>
              <Image source={plusIC} style={imgPlusStyle} />
          </TouchableOpacity>

          <View style={[catInfoOver, this.state.showInfoOver ? show : hide ]}>
              <TouchableOpacity>
                  <Image style={imgFlatItem} source={{uri:`${global.url_media}${this.state.markers[0].avatar}`}} />
                </TouchableOpacity>
              <View style={wrapInfoOver}>
                  <TouchableOpacity>
                      <Text style={txtTitleOver}>{this.state.markers[0].name}</Text>
                  </TouchableOpacity>
                      <Text style={txtAddrOver}>{this.state.markers[0].address}</Text>

              </View>
          </View>

      </View>
    );
  }
}
