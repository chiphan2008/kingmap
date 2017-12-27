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
import checkLocation from '../../api/checkLocation';

import upDD from '../../../src/icon/ic-white/ic-dropdown_up.png';
import sortDownIC from '../../../src/icon/ic-sort-down.png';
import searchIC from '../../../src/icon/ic-gray/ic-search.png';
import likeIC from '../../../src/icon/ic-like.png';
import favoriteIC from '../../../src/icon/ic-favorite.png';


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
      showLoc:false,
      curLocation : {
        latlng:'',
      },
      idDist:'',
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

  getCategory(idcat,loc){
    getApi(global.url+'content-by-category?category='+idcat+'&location='+loc)
    .then(arrData => {
      //console.log('parseFloat(marker.lat)',arrData.data)
        this.setState({ listData: arrData.data });
    })
    .catch(err => console.log(err));
  }

  getContentByDist(id_district,id_cat){
    getApi(`${global.url}${'search-content?district='}${id_district}${'&category='}${id_cat}`)
    .then(arrData => {
        this.setState({ listData: arrData.data });
    })
    .catch(err => console.log(err));
  }

  saveLocation(){
    checkLocation().then((e)=>{
      this.getContentByDist(e.idDist,this.props.navigation.state.params.idCat);
      this.setState({showLoc:!this.state.showLoc,idDist:e.idDist});
    });
  }
  componentDidMount() {
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
    const {navigate,setParams} = this.props.navigation;
    //console.log("this.props.ListLocation=",util.inspect(this.props.navigation,false,null));
    const {
      container,
      headLocationStyle, filterFrame,wrapFilter,
      inputSearch,show,hide,colorTextPP,colorNumPP,
      selectBoxLoc,optionListLoc,OptionItemLoc,
      wrapListLoc,flatItemLoc,imgFlatItem,wrapFlatRight,
      txtTitleOverCat,txtAddrOverCat,flatlistItemCat,wrapInfoOver,
      imgUp,imgUpLoc,popoverLoc,overLayout
    } = styles;

    return (
      <View style={container}>

        <View style={headLocationStyle}>
          <TextInput underlineColorAndroid='transparent' placeholder="Find place" style={inputSearch} />
          <Image style={{width:16,height:16,top:-28,left:-50}} source={searchIC} />
        </View>

        <View style={wrapFilter}>

                <View style={filterFrame}>
                <TouchableOpacity
                  onPress={()=>this.setState({showLoc:!this.state.showLoc})}
                  style={selectBoxLoc}>
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
              <FlatList
                     style={{marginBottom:100}}
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

        <View style={[popoverLoc, this.state.showLoc ? show : hide]}>
          <Image style={[imgUp,imgUpLoc]} source={upDD} />
          <View style={overLayout}>
              <SelectLocation saveLocation={this.saveLocation.bind(this)} />
          </View>
        </View>

      </View>
    );
  }
}
