/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image,
  TextInput, TouchableOpacity,
  FlatList,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import styles from '../../styles';

import bgMap from '../../../src/icon/bg-map.png';
import logoTop from '../../../src/icon/ic-white/Logo-ngang.png';
import searchIC from '../../../src/icon/ic-gray/ic-search.png';
import infoIC from '../../../src/icon/ic-white/ic-analysis.png';
import socialIC from '../../../src/icon/ic-white/ic-social.png';

import upDD from '../../../src/icon/ic-white/ic-dropdown_up.png';
import locationDD from '../../../src/icon/ic-gray/ic-location.png';
import onlineDD from '../../../src/icon/ic-gray/ic-online.png';
import checkDD from '../../../src/icon/ic-gray/ic-check-gray.png';
import likeDD from '../../../src/icon/ic-gray/ic-like.png';
import socialDD from '../../../src/icon/ic-gray/ic-social.png';


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
      labelLoc : "Địa điểm",
      labelCat : "Danh mục",
      labelSer : "Dịch vụ",
      valueLoc : 0,
      valueCat : 0,
      valueSer : 0,
    }
  }
  onSelectLoc(value, label) {
    this.setState({
      labelLoc : label,
      valueLoc : value,
    });
  }
  onSelectCat(value, label) {
    this.setState({
      labelCat : label,
      valueCat : value,
    });
  }
  onSelectSer(value, label) {
    this.setState({
      labelSer : label,
      valueSer : value,
    });
  }

  render() {
    const {navigation} = this.props;
    //console.log("this.props.Hometab=",util.inspect(this.props.navigation,false,null));
    const {
      container,
      headLocationStyle, filterFrame,wrapFilter,
      inputSearch,show,hide,colorTextPP,colorNumPP,
      selectBoxLoc,optionListLoc,OptionItemLoc,
      wrapListLoc,flatItemLoc,imgFlatItem,wrapFlatRight

    } = styles;

    return (
      <View style={container}>

        <View style={headLocationStyle}>
          <TextInput underlineColorAndroid='transparent' placeholder="Find place" style={inputSearch} />
          <Image style={{width:16,height:16,top:-28,left:-50}} source={searchIC} />
        </View>

        <View style={wrapFilter}>

                <View style={filterFrame}>

                <Select
                      onSelect = {this.onSelectLoc.bind(this)}
                      defaultText  = {this.state.labelLoc}
                      style = {selectBoxLoc}
                      textStyle = {{color:'#303B50'}}
                      optionListStyle={optionListLoc}
                      indicatorColor="#B0C2D2"
                      indicator="down"
                      indicatorSize={7}
                      transparent
                    >
                    <Option style={OptionItemLoc} value ="VIE">VIE</Option>
                    <Option style={OptionItemLoc} value="ENG">ENG</Option>
                </Select>
                <Select
                      onSelect = {this.onSelectLoc.bind(this)}
                      defaultText  = {this.state.labelLoc}
                      style = {selectBoxLoc}
                      textStyle = {{color:'#303B50'}}
                      optionListStyle={optionListLoc}
                      indicatorColor="#B0C2D2"
                      indicator="down"
                      indicatorSize={7}
                      transparent
                    >
                    <Option style={OptionItemLoc} value ="VIE">VIE</Option>
                    <Option style={OptionItemLoc} value="ENG">ENG</Option>
                </Select>
                <Select
                      onSelect = {this.onSelectLoc.bind(this)}
                      defaultText  = {this.state.labelLoc}
                      style = {selectBoxLoc}
                      textStyle = {{color:'#303B50'}}
                      optionListStyle={optionListLoc}
                      indicatorColor="#B0C2D2"
                      indicator="down"
                      indicatorSize={7}
                      transparent
                    >
                    <Option style={OptionItemLoc} value ="VIE">VIE</Option>
                    <Option style={OptionItemLoc} value="ENG">ENG</Option>
                </Select>

              </View>
        </View>

        <View style={wrapListLoc}>
                  <FlatList
                     data={[
                       {key: 'Joel'},
                       {key: 'John'},
                       {key: 'Jillian'},
                       {key: 'Jimmy'},
                       {key: 'Julie'},
                     ]}
                     renderItem={({item}) => (
                       <View style={flatItemLoc}>
                       <Image style={imgFlatItem} source={{uri:'http://diadiem.kingmap.vn/upload/img_content_thumbnail/1506316541_avatar_yXvdIt6ql7nkD.jpeg'}} />
                       <View style={wrapFlatRight}>
                           <Text>{item.key}</Text>
                           <Text>{item.key}</Text>
                           <View style={wrapFlatRight}>
                               <Text>{item.key}</Text>
                               <Text>{item.key}</Text>
                           </View>
                       </View>
                       </View>
                     )}
                   />
        </View>

      </View>
    );
  }
}
