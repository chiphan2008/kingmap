/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity,FlatList,} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import getApi from '../../api/getApi';
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
        latitude:10.7818513,
        longitude: 106.6769368,
        lat:10.7818513,
        lng: 106.6769368,
        altitude: 7,
        latitudeDelta:  0.014422,
        longitudeDelta: 0.011121,
        latlng: '10.7808,106.6783',
      },

      showCat : false,
      showInfoOver : false,
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
      //console.log('--arrData--',arrData.data)
        if(arrData.data.length === 0)
          arrData.data = this.state.markers;
        else
          this.setState({showInfoOver:true});

        this.setState({ markers: arrData.data });
    })
    .catch(err => console.log(err));
  }

  getLoc(){
    navigator.geolocation.getCurrentPosition(
          (position) => {
            const latlng = `${position.coords.latitude}${','}${position.coords.longitude}`;
            //this.getCategory(this.props.navigation.state.params.idCat,this.state.curLocation.latlng);
            this.getCategory(this.props.navigation.state.params.idCat,latlng);
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
            //console.log(error)
          },
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000}
    );
  }

  componentWillMount(){
   this.getLoc();
  }

  render() {

    const {navigate,goBack} = this.props.navigation;
    const { idCat, name_cat, sub_cat } = this.props.navigation.state.params;
    //console.log("this.props.CategoryScreen=",util.inspect(this.props.navigation.state.key,false,null));
    const {
      container,
      headCatStyle, headContent,wrapIcRight,plusStyle,imgPlusStyle,
      popover,show,hide,overLayoutCat,shadown,colorText,listCatOver,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,
      imgFlatItem,catInfoOver,txtTitleOver,txtAddrOver,wrapInfoOver,
    } = styles;
    //onRegionChange={this.onRegionChange}
    return (
      <View style={container}>
        <View style={headCatStyle}>
            <View style={headContent}>

                <TouchableOpacity onPress={()=> goBack()}>
                <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
                </TouchableOpacity>

                <TouchableOpacity
                      style={{alignItems:'center'}}
                      onPress={()=>this.setState({showCat :!this.state.showCat,showInfoOver:false})}
                      >
                      <Text style={{color:'white',fontSize:16}}>{name_cat}</Text>
                      <Image source={sortDown} style={{width:14, height:14}} />
                </TouchableOpacity>
                <Image source={listIC} style={{width:16, height:20}} />
            </View>
        </View>

        <View style={[popover, this.state.showCat ? show : hide]}>
            <View style={[overLayoutCat,shadown]}>
            <FlatList
               keyExtractor={item => item.id}
               data={sub_cat}
               renderItem={({item}) => (
                 <TouchableOpacity
                 onPress={()=>{navigate('ListCatScr',{idCat,name_cat,sub_cat,id_subCat:item.id, name_subCat:item.name});
                  this.setState({showCat:!this.state.showCat});
               }}
                 style={listCatOver}>
                   <Text style={colorText}>{item.name}</Text>
               </TouchableOpacity>
            )} />
            </View>

        </View>

        <MapView
            style={{flex:1,position:'relative',zIndex:1}}
            region={ this.state.curLocation }
            onLoad={()=>this.getLoc()}
            rotateEnabled
            
          >
          {this.state.markers.map((marker,index) => {
            return (
            <MapView.Marker
              key={marker.id}
              coordinate={{
                latitude: Number(marker.lat),
                longitude: Number(marker.lng),
              }}
              title={marker.name}
              description={`${marker.address}${', '}${marker._district.name}${', '}${marker._city.name}${', '}${marker._country.name}`}
              zoomEnabled
            >
            <Image source={{uri:`${global.url_media}${marker._category_type.marker}`}} style={{width:48,height:54}} />
            </MapView.Marker>
          )
        })}

          <MapView.Marker
            coordinate={{
              latitude: Number(this.state.curLocation.latitude),
              longitude: Number(this.state.curLocation.longitude),
            }}

          />
          </MapView>
          <TouchableOpacity style={plusStyle}>
              <Image source={plusIC} style={imgPlusStyle} />
          </TouchableOpacity>

          <View style={[catInfoOver, this.state.showInfoOver ? show : hide ]}>
                <TouchableOpacity
                onPress={()=>navigate('DetailScr',{idContent:this.state.markers[0].id,lat:this.state.markers[0].lat,lng:this.state.markers[0].lng})}
                >
                  <Image style={imgFlatItem} source={{uri:`${global.url_media}${this.state.markers[0].avatar}`}} />
                </TouchableOpacity>
                <View style={wrapInfoOver}>
                    <TouchableOpacity
                    onPress={()=>navigate('DetailScr',{idContent:this.state.markers[0].id,lat:this.state.markers[0].lat,lng:this.state.markers[0].lng})}
                    >
                        <Text numberOfLines={2} style={txtTitleOver}>{this.state.markers[0].name}</Text>
                    </TouchableOpacity>
                        <Text numberOfLines={1} style={txtAddrOver}>{`${this.state.markers[0].address}${', '}${this.state.markers[0]._district.name}${', '}${this.state.markers[0]._city.name}`}</Text>

                </View>
          </View>

      </View>
    );
  }
}
