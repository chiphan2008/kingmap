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
import plusIC from '../../../src/icon/ic-home/ic-plus.png';

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
    //console.log("this.props.CategoryScreen=",util.inspect(this.props.navigation.state.routeName,false,null));
    const {
      container,
      headCatStyle, headContent,wrapIcRight,plusStyle,
      popover,show,hide,overLayoutCat,colorText,listCatOver,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,
      imgFlatItem,catInfoOver,txtTitleOver,txtAddrOver,wrapInfoOver,
    } = styles;
    //onRegionChange={this.onRegionChange}
    return (
      <View style={container}>
        <View style={headCatStyle}>
            <View style={headContent}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('MainScr')}>
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

            <View style={overLayoutCat}>
                <TouchableOpacity  style={listCatOver}>
                    <Text style={colorText}>Địa điểm</Text>
                </TouchableOpacity>
                
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
            <Image source={plusIC} style={plusStyle} />
            <View style={catInfoOver}>
                <TouchableOpacity>
                    <Image style={imgFlatItem} source={{uri:'http://diadiem.kingmap.vn/upload/img_content_thumbnail/1506316541_avatar_yXvdIt6ql7nkD.jpeg'}} />
                  </TouchableOpacity>
                <View style={wrapInfoOver}>
                    <TouchableOpacity>
                        <Text style={txtTitleOver}>Pane e Vino - Ẩm Thực Ý - Nguyễn Khắc Cần</Text>
                    </TouchableOpacity>
                        <Text style={txtAddrOver}>3 Nguyễn Khắc Cần, Quận Hoàn Kiếm, Hà Nội, Việt Nam</Text>

                </View>
            </View>
      </View>
    );
  }
}
