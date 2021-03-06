/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity,FlatList,} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import getApi from '../../api/getApi';
import getLocationByIP from '../../api/getLocationByIP';
import global from '../../global';
import arrTest from '../../arrTest';
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
        latitude:0,
        longitude: 0,
        lat:0,
        lng: 0,
        altitude: 7,
        latitudeDelta:  0.044422,
        longitudeDelta: 0.011121,
        latlng: '0,0',
      },

      showCat : false,
      showInfoOver : false,
      id_subCat:'',
      name_subCat:'Tất cả',
      markers:[{
        id : 1,
        lat: 0,
        lng: 0,
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

  getCategory(idcat,idsub=null,loc){
    let url = `${global.url}${'content-by-category?category='}${idcat}${'&location='}${loc}`;
    if(idsub!==null) url += `${'&subcategory='}${idsub}`;
    getApi(url)
    .then(arrData => {
        this.setState({ markers: arrData.data });
    })
    .catch(err => console.log(err));
  }

  getLoc(){
    //console.log('getloc',this.props.navigation.state.params.idCat);
    navigator.geolocation.getCurrentPosition(
          (position) => {
            const id = this.props.navigation.state.params.idCat;
            const latlng = `${position.coords.latitude}${','}${position.coords.longitude}`;
            this.getCategory(id,null,latlng);
            this.setState({
              curLocation : {
                latitude:position.coords.latitude,
                longitude: position.coords.longitude,
                lat:position.coords.latitude,
                lng: position.coords.longitude,
                altitude: 7,
                latitudeDelta:  0.004422,
                longitudeDelta: 0.001121,
                latlng:latlng,
              }
            });
            //console.log('this.props.navigation.state.params',this.props.navigation.state.params.idCat);
           },
           (error) => {
            // getLocationByIP().then(e => {
            // this.getCategory(this.props.navigation.state.params.idCat,`${e.latitude}${','}${e.longitude}`);
            // this.setState({
            //   curLocation : {
            //     latitude:e.latitude,
            //     longitude: e.longitude,
            //     lat:e.latitude,
            //     lng: e.longitude,
            //     altitude: 7,
            //     latitudeDelta:  0.044422,
            //     longitudeDelta: 0.011121,
            //     latlng:`${e.latitude}${','}${e.longitude}`,
            //   }
            // });
            // });
          },
          {enableHighAccuracy: true, timeout: 5000, maximumAge: 5000}
    );
  }

  componentDidMount(){
   this.getLoc();
  }
  onRegionChange(region) {
    this.setState({
      region:region,
      curLocation : {
      latitude:region.latitude,
      longitude: region.longitude,
      lat:region.latitude,
      lng: region.longitude,
      altitude: 7,
      latitudeDelta:  0.004422,
      longitudeDelta: 0.001121,
      latlng:`${region.latitude},${region.longitude}`,
    } });
  }
  render() {

    const {navigate,goBack} = this.props.navigation;
    const { idCat, name_cat, sub_cat } = this.props.navigation.state.params;
    //console.log('sub_cat',sub_cat);
    //console.log("this.props.CategoryScreen=",util.inspect(this.props.navigation.state.key,false,null));
    const {
      container,
      headCatStyle, headContent,wrapIcRight,plusStyle,imgPlusStyle,
      popover,show,hide,overLayoutCat,shadown,colorText,listCatOver,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,
      imgFlatItem,catInfoOver,txtTitleOver,txtAddrOver,wrapInfoOver,
    } = styles;

    return (
      <View style={container}>
        <View style={headCatStyle}>
            <View style={headContent}>

                <TouchableOpacity onPress={()=> goBack()}>
                <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
                </TouchableOpacity>

                <TouchableOpacity
                      style={{alignItems:'center'}}
                      onPress={()=>this.setState({showCat :!this.state.showCat})}
                      >
                      <Text style={{color:'white',fontSize:16}}>{name_cat}</Text>
                      <Image source={sortDown} style={{width:18, height:18}} />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                  navigate('ListCatScr',{idCat,name_cat,id_subCat:this.state.id_subCat,name_subCat:this.state.name_subCat,sub_cat});
                }}>
                <Image source={listIC} style={{width:16, height:20}} />
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity onPress={()=>this.setState({showCat:!this.state.showCat})} style={[popover, this.state.showCat ? show : hide]}>
            <View style={[overLayoutCat,shadown]}>
            <FlatList
               keyExtractor={item => item.id}
               data={sub_cat}
               renderItem={({item}) => (
                 <TouchableOpacity
                 onPress={()=>{
                  this.getCategory(idCat,item.id,this.state.curLocation.latlng)
                  this.setState({showCat:!this.state.showCat,id_subCat:item.id,name_subCat:item.name});
               }}
                 style={listCatOver}>
                   <Text style={colorText}>{item.name}</Text>
               </TouchableOpacity>
            )} />
            <TouchableOpacity
            onPress={()=>{
            //onPress={()=>{navigate('ListCatScr',{idCat,name_cat,sub_cat,id_subCat:item.id, name_subCat:item.name});
             this.getCategory(idCat,null,this.state.curLocation.latlng)
             this.setState({showCat:!this.state.showCat,id_subCat:null,name_subCat:''});
          }}
            style={listCatOver}>
              <Text style={colorText}>Tất cả</Text>
          </TouchableOpacity>
            </View>

        </TouchableOpacity>

        <MapView.Animated
            style={{flex:1,position:'relative',zIndex:1}}
            region={ this.state.curLocation }
            onRegionChange={()=>this.onRegionChange.bind(this)}
            onLoad={()=>this.getLoc()}
            customMapStyle={global.style_map_ios}
            showsPointsOfInterest={false}

          >
          {this.state.markers.map((marker,index) => {
            return (
            <MapView.Marker
              key={marker.id}
              coordinate={{
                latitude: Number(marker.lat),
                longitude: Number(marker.lng),
              }}

            >
            <Image source={{uri:`${global.url_media}${marker._category_type.marker}`}} style={{width:48,height:54}} />

            <MapView.Callout
            onPress={()=>navigate('DetailScr',{idContent:marker.id,lat:marker.lat,lng:marker.lng})}>
              <TouchableOpacity onPress={()=>navigate('DetailScr',{idContent:marker.id,lat:marker.lat,lng:marker.lng})}>
              <View style={{height: 45,width: 300,alignItems:'center',borderRadius:3}}>
              <Text style={{fontWeight:'bold'}}>{marker.name}</Text>
              <Text numberOfLines={1}>{`${marker.address}${', '}${marker._district.name}${', '}${marker._city.name}${', '}${marker._country.name}`}</Text>
              </View>
              </TouchableOpacity>
            </MapView.Callout>

            </MapView.Marker>
          )
        })}

          <MapView.Marker
            draggable
            onDragEnd={(e) => {
            this.getCategory(idCat,null,`${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}`);
          }}
            coordinate={{
              latitude: Number(this.state.curLocation.latitude),
              longitude: Number(this.state.curLocation.longitude),
            }}

          />
          </MapView.Animated>
          <TouchableOpacity style={plusStyle}>
              <Image source={plusIC} style={imgPlusStyle} />
          </TouchableOpacity>

      </View>
    );
  }
}
