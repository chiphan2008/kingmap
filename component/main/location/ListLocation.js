/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image,
  TextInput, TouchableOpacity,
  FlatList,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import styles from '../../styles';
import getApi from '../../api/getApi';
import global from '../../global';
import SelectLocation from '../../main/location/SelectLocation';

import sortDownIC from '../../../src/icon/ic-sort-down.png';
import searchIC from '../../../src/icon/ic-gray/ic-search.png';
import likeIC from '../../../src/icon/ic-like.png';
import favoriteIC from '../../../src/icon/ic-favorite.png';


import {Select, Option} from "react-native-chooser";

export default class ListLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelLoc : "Địa điểm",
      labelCat : "Danh mục",
      labelSer : "Dịch vụ",
      valueLoc : 0,
      valueCat : 0,
      valueSer : 0,
      curLocation : {
        latlng:'',
      },
      listData:[],
      markers:[{
        id : 1,
        lat: 10.780843591000904,
        lng: 106.67830749999996,
        name: '',
        _district:{name:''},
        _city:{name:''},
        _country:{name:''},
        _category_type:{marker:''},
        address:'',
        avatar:'',
      },],
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

  getCategory(idcat,loc){
    //console.log('(idcat,idsub,loc)',idcat,idsub,loc);
    getApi(global.url+'content-by-category?category='+idcat+'&location='+loc)
    .then(arrData => {
      //console.log('parseFloat(marker.lat)',arrData.data)
        //if(arrData.data.length === 0) arrData.data = this.state.markers;
        this.setState({ listData: arrData.data });
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
            const latlng = `${position.coords.latitude}${','}${position.coords.longitude}`;
            const id = this.props.navigation.state.params.idCat;

            this.getCategory(id,latlng)
            this.setState({
              curLocation : {
                latlng:latlng,
              }
            });
            //console.log('this.props.navigation.state.params',this.props.navigation.state.params.idCat);
           },
           (error) => {
            //console.log(error)
          },
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    //console.log("this.props.Hometab=",util.inspect(this.props.navigation,false,null));
    const {
      container,
      headLocationStyle, filterFrame,wrapFilter,
      inputSearch,show,hide,colorTextPP,colorNumPP,
      selectBoxLoc,optionListLoc,OptionItemLoc,
      wrapListLoc,flatItemLoc,imgFlatItem,wrapFlatRight,
      txtTitleOverCat,txtAddrOverCat,flatlistItemCat,wrapInfoOver,
    } = styles;

    return (
      <View style={container}>

        <View style={headLocationStyle}>
          <TextInput underlineColorAndroid='transparent' placeholder="Find place" style={inputSearch} />
          <Image style={{width:16,height:16,top:-28,left:-50}} source={searchIC} />
        </View>

        <View style={wrapFilter}>



                <View style={filterFrame}>
                <TouchableOpacity style = {selectBoxLoc}>
                    <Text style={{color:'#303B50'}}>{this.state.labelLoc}</Text>
                    <Image source={sortDownIC} style={{width:12,height:13,marginTop:3,}} />
                </TouchableOpacity>

                <TouchableOpacity style = {selectBoxLoc}>
                    <Text style={{color:'#303B50'}}>{this.state.labelCat}</Text>
                    <Image source={sortDownIC} style={{width:12,height:13,marginTop:3,}} />
                </TouchableOpacity>

                <TouchableOpacity style = {selectBoxLoc}>
                    <Text style={{color:'#303B50'}}>{this.state.labelSer}</Text>
                    <Image source={sortDownIC} style={{width:12,height:13,marginTop:3,}} />
                </TouchableOpacity>

              </View>
        </View>

        <View style={wrapListLoc}>
        <View style={{flex:1}}>
            <View  style={{flex:1}}>
            <SelectLocation navigation={this.props.navigation} />
            </View>
            <View  style={{flex:1}}>
                <Text style={{color:'#303B50'}}>{this.state.labelLoc}</Text>
            </View>
        </View>
        
                  <FlatList
                     ListEmptyComponent={<Text>Loading ...</Text>}
                     data={this.state.listData}
                     keyExtractor={item => item.id}
                     renderItem={({item}) => (
                       <View style={flatlistItemCat}>
                           <TouchableOpacity>
                             <Image style={imgFlatItem} source={{uri:`${global.url_media}${item.avatar}`}} />
                           </TouchableOpacity>
                           <View style={wrapInfoOver}>
                             <View>
                               <TouchableOpacity>
                                   <Text style={txtTitleOverCat} numberOfLines={2}>{item.name}</Text>
                               </TouchableOpacity>
                                   <Text style={txtAddrOverCat} numberOfLines={1}>{`${item.address}${', '}${item._district.name}${', '}${item._city.name}${', '}${item._country.name}`}</Text>
                             </View>

                               <View style={{flexDirection:'row'}}>
                                   <View style={{flexDirection:'row',paddingRight:10}}>
                                     <Image style={{width:22,height:18,marginRight:5}} source={likeIC} />
                                     <Text>{item.like}</Text>
                                   </View>
                                   <View style={{paddingRight:10}}>
                                     <Text> | </Text>
                                   </View>
                                   <View  style={{flexDirection:'row',paddingRight:10}}>
                                     <Image style={{width:18,height:18,marginRight:5}} source={favoriteIC} />
                                     <Text>{item.vote}</Text>
                                   </View>
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
