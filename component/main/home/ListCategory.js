/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity,FlatList} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import getApi from '../../api/getApi';
import global from '../../global';
//import arrTest from '../../arrTest';
import styles from '../../styles';

import sortDown from '../../../src/icon/ic-white/sort-down.png';
import arrowLeft from '../../../src/icon/ic-white/arrow-left.png';
import likeIC from '../../../src/icon/ic-like.png';
import favoriteIC from '../../../src/icon/ic-favorite.png';
//import logoMap from '../../../src/icon/Logo-map.png';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCat : false,

      curLocation:{
        latlng: '10.80467476,106.71593103',
      },
      listData:[],
      nameSubCat: null,
    };


  }

  getCategory(idcat,idsub,name_subCat,loc){
    this.setState({nameSubCat:name_subCat,showCat:false});
    getApi(global.url+'content-by-category?category='+idcat+'&subcategory='+idsub+'&location='+loc)
    .then(arrData => {
      //console.log('parseFloat(marker.lat)',arrTest.data)
        if(arrData.data.length === 0) arrData.data = this.state.markers;
        this.setState({ listData: arrData.data });
    })
    .catch(err => console.log(err));
  }
  componentWillMount() {
    const id = this.props.navigation.state.params.idCat;
    const idsub = this.props.navigation.state.params.id_subCat;
    const name_subCat = this.props.navigation.state.params.name_subCat;
    this.getCategory(id,idsub,name_subCat,this.state.curLocation.latlng)
  }

  render() {

    const {navigate} = this.props.navigation;
    const { idCat, id_subCat, name_cat, sub_cat, name_subCat } = this.props.navigation.state.params;
    //console.log("this.props.CategoryScreen=",util.inspect(this.props.navigation.state.key,false,null));
    const {
      container,
      headCatStyle, headContent,plusStyle,
      popover,show,hide,overLayoutCat,colorText,listCatOver,
      imgFlatItem,catInfoOver,txtTitleOverCat,txtAddrOverCat,wrapInfoOver,
      titleSubCat,wrapFlatList,flatlistItemCat
    } = styles;
    //onRegionChange={this.onRegionChange}
    return (
      <View style={container}>
        <View style={headCatStyle}>
            <View style={headContent}>
                <TouchableOpacity onPress={()=> navigate('CatScr',{idCat,name_cat,sub_cat})}>
                <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
                </TouchableOpacity>

                <TouchableOpacity
                      style={{alignItems:'center'}}
                      onPress={()=>this.setState({showCat :!this.state.showCat,showInfoOver:false})}
                      >
                      <Text style={{color:'white',fontSize:16}}>{name_cat}</Text>
                      <Image source={sortDown} style={{width:14, height:14}} />
                </TouchableOpacity>
                <View></View>
            </View>
        </View>

        <View style={[popover, this.state.showCat ? show : hide]}>
            <View style={overLayoutCat}>
            {sub_cat.map((e)=>
              (<TouchableOpacity
                onPress={()=>{ this.getCategory(idCat,e.id,e.name,this.state.curLocation.latlng) }}
                key={e.id}
                style={listCatOver}>
                  <Text style={colorText}>{e.name}</Text>
              </TouchableOpacity>))
            }
            </View>
        </View>

        <View>
          <Text style={titleSubCat}>{this.state.nameSubCat.toUpperCase()}</Text>
            <View style={wrapFlatList}>
            <FlatList
               data={this.state.listData}
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
                              <Text style={txtAddrOverCat} numberOfLines={1}>{item.address}</Text>
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
               keyExtractor={item => item.id}
             />
             </View>
          </View>

      </View>
    );
  }
}
