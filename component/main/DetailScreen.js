/* @flow */

import React, { Component } from 'react';
import {Platform, ScrollView, FlatList, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window');
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import util from 'util';
import global from '../global';
import getApi from '../api/getApi';
import Header from './detail/Header';
import Comments from './detail/Comments';

import onlineIC from '../../src/icon/ic-green/ic-online.png';

import locationDarkIC from '../../src/icon/ic-blue/ic-location-dark.png';
import phoneIC from '../../src/icon/ic-blue/ic-phone.png';
import priceIC from '../../src/icon/ic-blue/ic-price.png';
import timeIC from '../../src/icon/ic-blue/ic-time.png';

import likeIcon from '../../src/icon/ic-like.png';
import favoriteIcon from '../../src/icon/ic-favorite.png';


import checkBlueIC from '../../src/icon/ic-blue/ic-check.png';
import checkGreenIC from '../../src/icon/ic-green/ic-check.png';
import logoMap from '../../src/icon/Logo-map.png';

import {Select, Option} from "react-native-chooser";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region:{
        latitude:10.7818513,
        longitude: 106.6769368,
        latitudeDelta:  0.014422,
        longitudeDelta: 0.011121,
      },
      listData:{
        image_space:[],
        image_menu:[],
        list_service:[],
        list_suggest:[],
        list_group:[],
        content:{
          alias:'',
          _district:{name:''},
          _city:{name:''},
          _country:{name:''},
          _comments:[],
        },
      },
      activeSlide:0,
      showInfo : false,
      showShare : false,

    }
  }
  onSelectLang(value, label) {
    this.setState({
      valueLang : value
    });
  }
  getContent(idContent){
    getApi(`${global.url}${'content/'}${idContent}`)
    .then(arrData => {
      //console.log('arrData',arrData);
        this.setState({
          listData: arrData.data,
        });

    })
    .catch(err => console.log(err));
  }

  componentWillMount(){
    this.getContent(this.props.navigation.state.params.idContent);
  }
  componentDidMount(){
    this.setState({
      region:{
        latitude: parseFloat(this.props.navigation.state.params.lat),
        longitude: parseFloat(this.props.navigation.state.params.lng),
        altitude: 7,
        latitudeDelta:  0.004422,
        longitudeDelta: 0.001121,
        latlng:`${this.props.navigation.state.params.lat}${','}${this.props.navigation.state.params.lng}`,
      },
    });
  }
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    const {navigate} = this.props.navigation;
    const { idContent } = this.props.navigation.state.params;
    //console.log('this.state.listData',`${global.url_media}${this.state.listData.image_menu[0]}`);
    //console.log("this.props.Hometab=",util.inspect(this.props.navigation,false,null));
    const {
      container, bgImg,colorWhite,likeIC,shareIC,imgIC,imgOnline,voteIC,
      imgSocial, imgInfo,aligncenter,imgDetailContent,
      selectBox,optionListStyle,OptionItem,show,hide,colorTextPP,colorNumPP,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,wrapImgDetail,
      wrapContentDetail,rowFlex,imgMail,marRight,colorContent,imgContentIC,imgICLocation,imgICMail,
      rowFlexBottom,favIC,colorRed,spaceContent,rowFlexImg,colorBlack,wrapService,
      titleSpace,sizeTitle,imgSpace,widthHafl,txtAddrOver,colorText,
      width30,padLeft,
    } = styles;

    return (
      <ScrollView style={container}>
        <Header navigation={this.props.navigation} />

        <View style={wrapContentDetail}>
          <View style={rowFlex}>
              <View style={wrapImgDetail}>
              <Image style={imgDetailContent} source={{uri:`${global.url_media}${this.state.listData.content.avatar}`}} />
              <Image source={onlineIC} style={imgOnline} />
              <Text style={{fontSize:17,color:'#9FD56A'}}>Online</Text>
              </View>
              <View style={{padding:10,width:width-120,}}>
              <Text numberOfLines={2} style={{fontSize:26,color:'#1C263D'}}>{this.state.listData.content.name}</Text>
              </View>
          </View>


          <View style={rowFlex}>
            <Image style={[imgICLocation,marRight]} source={locationDarkIC} />
            <Text numberOfLines={1} style={[colorContent,width30]}>{`${this.state.listData.content.address}${', '}${this.state.listData.content._district.name}${', '}${this.state.listData.content._city.name}`}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgContentIC,marRight]} source={phoneIC} />
            <Text style={colorContent}>{this.state.listData.content.phone}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgContentIC,marRight]} source={timeIC} />
            <Text style={colorContent}>{`${this.state.listData.content.open_from}${' - '}${this.state.listData.content.open_to}`}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgContentIC,marRight]} source={priceIC} />
            <Text style={colorContent}>{`${this.state.listData.content.price_from}${' - '}${this.state.listData.content.price_to}`}</Text>
          </View>

          <View style={rowFlexBottom}>
              <Image source={likeIcon} style={[likeIC]} />
              <Text style={[marRight,colorRed]}>{this.state.listData.content.like}</Text>
              <Text style={marRight}> | </Text>
              <Image source={favoriteIcon} style={favIC} />
              <Image source={favoriteIcon} style={favIC} />
              <Image source={favoriteIcon} style={favIC} />
              <Image source={favoriteIcon} style={[favIC,marRight]} />
              <Text>({this.state.listData.content.vote})</Text>
          </View>

      </View>

      <View style={spaceContent}>
          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>KHÔNG GIAN ({this.state.listData.image_space.length})</Text>
              <TouchableOpacity
              onPress={()=>navigate('ListIMGScr',{
                idContent,
                spaceTab:'active',menuTab:'',videoTab:''})}
              >
              <Text>Xem tất cả >></Text>
              </TouchableOpacity>
          </View>
          {this.state.listData.image_space.length>0 ?
            <View style={rowFlexImg}>
            <Image source={{uri :`${global.url_media}${this.state.listData.image_space[0]}`}} style={imgSpace}/>
            <Image source={{uri :`${global.url_media}${this.state.listData.image_space[1]}`}} style={imgSpace}/>
            </View>
            :
            <View></View>
          }

          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>MENU ({this.state.listData.image_menu.length})</Text>
              <TouchableOpacity
              onPress={()=>navigate('ListIMGScr',{
                idContent,
                spaceTab:'',menuTab:'active',videoTab:''})}
              >
              <Text>Xem tất cả >></Text>
              </TouchableOpacity>
          </View>
          {this.state.listData.image_menu.length>0 ?
            <View style={rowFlexImg}>
            <Image source={{uri :`${global.url_media}${this.state.listData.image_menu[0]}`}} style={imgSpace}/>
            <Image source={{uri :`${global.url_media}${this.state.listData.image_menu[1]}`}} style={imgSpace}/>
            </View>
          :
          <View></View>
          }

          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>VIDEO</Text>
              <TouchableOpacity
              onPress={()=>navigate('ListIMGScr',{
                idContent,
                spaceTab:'',menuTab:'',videoTab:'active'})}
              >
              <Text>Xem tất cả >></Text>
              </TouchableOpacity>
          </View>
          {this.state.listData.image_space.length>0 ?
            <View style={rowFlexImg}>
            <Image source={{uri :`${global.url_media}${this.state.listData.image_space[0]}`}} style={imgSpace}/>
            <Image source={{uri :`${global.url_media}${this.state.listData.image_space[1]}`}} style={imgSpace}/>
            </View>
            :
            <View></View>
          }

      </View>

      <View style={wrapContentDetail}>
          <View style={wrapService}>
          {this.state.listData.list_service.map((e,index) => {
              return (
                  <View style={[rowFlex,widthHafl]} key={e.id_service_item}>
                    <Image source={`${this.state.listData.service_content}`.includes(e.id_service_item) ? checkGreenIC : checkBlueIC} style={[imgInfo,marRight]} />
                    <Text numberOfLines={2} style={`${this.state.listData.service_content}`.includes(e.id_service_item) ? colorBlack : colorContent}>{e.name}</Text>
                  </View>
              )
            })
          }
          </View>
          <View style={rowFlex}></View>
      </View>
      <View style={{width,height:height/2}}>
      <MapView
          style={{flex:1,height:height/2,zIndex:10,alignSelf:'stretch'}}
          region={this.state.region}
          rotateEnabled
        >
        <MapView.Marker
          coordinate={{
            latitude: Number(this.state.region.latitude),
            longitude: Number(this.state.region.longitude),
          }}
          >
          <Image source={logoMap} style={{width:57,height:50}} />
        </MapView.Marker>
        </MapView>
        </View>


        <View style={wrapContentDetail}>
          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>BÌNH LUẬN ({this.state.listData.content._comments.length})</Text>
          </View>

          <Comments
          navigation={this.props.navigation}
          idContent={idContent}
          listComment={this.state.listData.content._comments} />

          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>CHI NHÁNH KHÁC</Text>
          </View>
          {this.state.listData.list_group.length>0 ?

            <View>
            <Carousel
              activeSlideAlignment={'start'}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              data={this.state.listData.list_group}
              renderItem={({item}) =>(
                <View style={[widthHafl,marRight]}
                    key={item.id}>
                    <TouchableOpacity
                    onPress={()=> navigate('DetailScr',{idContent:item.id,lat:item.lat,lng:item.lng})}
                    style={[widthHafl,marRight]}>
                        <Image source={{uri :`${global.url_media}${item.avatar}`}} style={imgSpace}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=> navigate('DetailScr',{idContent:item.id,lat:item.lat,lng:item.lng})}
                    style={[widthHafl,marRight]}>
                        <Text style={colorText} numberOfLines={2}>{item.name}</Text>
                    </TouchableOpacity>
                        <Text style={txtAddrOver} numberOfLines={1}>{`${item.address}${', '}${item._district.name}${', '}${item._city.name}`}</Text>
                    </View>
              )}
              sliderWidth={width}
              itemWidth={(width-50)/2}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              />

            </View>
              :
            <View></View>
          }

        </View>

        <View style={wrapContentDetail}>

          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>KINGMAP GỢI Ý</Text>
          </View>

          {this.state.listData.list_suggest.length>0 ?
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={widthHafl}>
              <TouchableOpacity
              onPress={()=>navigate('DetailScr',{idContent:this.state.listData.list_suggest[0].id,lat:this.state.listData.list_suggest[0].lat,lng:this.state.listData.list_suggest[0].lng,})}
              >
              <Image source={{uri :`${global.url_media}${this.state.listData.list_suggest[0].avatar}`}} style={imgSpace}/>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>navigate('DetailScr',{idContent:this.state.listData.list_suggest[0].id,lat:this.state.listData.list_suggest[0].lat,lng:this.state.listData.list_suggest[0].lng,})}
              >
              <Text style={colorText} numberOfLines={2}>{this.state.listData.list_suggest[0].name}</Text>
              </TouchableOpacity>
              <Text style={txtAddrOver} numberOfLines={1}>{`${this.state.listData.list_suggest[0].address}${', '}${this.state.listData.list_suggest[0]._district.name}${', '}${this.state.listData.list_suggest[0]._city.name}`}</Text>

              <View style={{flexDirection:'row',marginTop:5}}>
                  <View style={{flexDirection:'row',paddingRight:10}}>
                    <Image style={{width:22,height:18,marginRight:5}} source={likeIcon} />
                    <Text>{this.state.listData.list_suggest[0].like}</Text>
                  </View>
                  <View style={{paddingRight:10}}>
                    <Text> | </Text>
                  </View>
                  <View  style={{flexDirection:'row',paddingRight:10}}>
                    <Image style={{width:18,height:18,marginRight:5}} source={favoriteIcon} />
                    <Text>{this.state.listData.list_suggest[0].vote}</Text>
                  </View>
              </View>

            </View>

            <View style={widthHafl}>
            <TouchableOpacity
            onPress={()=>navigate('DetailScr',{idContent:this.state.listData.list_suggest[1].id,lat:this.state.listData.list_suggest[1].lat,lng:this.state.listData.list_suggest[1].lng,})}
            >
              <Image source={{uri :`${global.url_media}${this.state.listData.list_suggest[1].avatar}`}} style={imgSpace}/>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>navigate('DetailScr',{idContent:this.state.listData.list_suggest[1].id,lat:this.state.listData.list_suggest[1].lat,lng:this.state.listData.list_suggest[1].lng,})}
              >
              <Text style={colorText} numberOfLines={2}>{this.state.listData.list_suggest[1].name}</Text>
              </TouchableOpacity>
              <Text style={txtAddrOver} numberOfLines={1}>{this.state.listData.list_suggest[1].address}</Text>
              <View style={{flexDirection:'row',marginTop:5}}>
                  <View style={{flexDirection:'row',paddingRight:10}}>
                    <Image style={{width:22,height:18,marginRight:5}} source={likeIcon} />
                    <Text>{this.state.listData.list_suggest[1].like}</Text>
                  </View>
                  <View style={{paddingRight:10}}>
                    <Text> | </Text>
                  </View>
                  <View  style={{flexDirection:'row',paddingRight:10}}>
                    <Image style={{width:18,height:18,marginRight:5}} source={favoriteIcon} />
                    <Text>{this.state.listData.list_suggest[1].vote}</Text>
                  </View>
              </View>
            </View>

            </View>
            :
            <View></View>
          }

          <View style={rowFlex}></View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  imgIC:{width:21,height:23,marginBottom:5},

  imgContentIC:{width:16,height:16,},
  imgICLocation:{width:14,height:16,},
  imgICMail:{width:16,height:12,marginTop:5},
  imgMail:{width:22,height:17},
  likeIC:{width:25,height:21,marginRight:7},

  favIC:{width:22,height:21,marginRight:2},
  colorRed:{color:'#BE2826',fontSize:15,},
  colorContent:{color:'#6587A8',overflow:'hidden',fontSize:15,},

  width30:{width:width-50},

  wrapService:{
    flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },
  spaceContent : {
      width: width - 20,paddingLeft:20
  },
  imgSpace:{
    width:Platform.OS==='ios' ? 160 : 200,
    height:Platform.OS==='ios' ? 160 : 200,
    marginRight:20
  },
  widthHafl:{width:(width-40)/2,overflow:'hidden'},
  txtAddrOver:{color:'#6587A8',fontSize:14,overflow:'hidden',marginTop:5},
  colorText :{color:'#303B50',fontSize:17,marginTop:7},
  sizeTitle:{fontSize:20},
  titleSpace:{flexDirection:'row',justifyContent:'space-between',padding:30,paddingLeft:0,paddingRight:20,},
  marRight:{marginRight:10},
  rowFlex:{flexDirection:'row',paddingLeft:10,paddingRight:10,marginTop:10},
  rowFlexImg:{flexDirection:'row',marginBottom:20},
  rowFlexBottom:{flexDirection:'row',padding:5,paddingLeft:10,marginTop:15,marginBottom:15,alignItems:'flex-end'},
  padLeft:{paddingLeft:15},
  wrapContentDetail:{flexWrap:'wrap',padding:10,backgroundColor:'#fff'},

  imgContent : {
      width: 65,height: 65,marginBottom:10,resizeMode : 'cover',
  },
  labelCat :{
    marginBottom:40,backgroundColor:'transparent',textAlign:'center',width:65,
  },
  wrapImgDetail:{marginRight:15,alignItems:'center'},
  imgInfo : {
      width: 20,height: 20,
  },

  imgDetailContent:{width:90,height:90,borderRadius:45,marginBottom:5,},
  imgOnline : {
      width: 18,height: 18,position:'absolute',left:65,top:65
  },
  imgSocial : {
      width: 21,height: 23,
  },
  selectBox : {
    width:50,borderColor:'transparent',position:'relative',paddingLeft:0,paddingTop:5,
  },
  optionListStyle :{
    backgroundColor:'#fff',borderColor:'transparent',position:'absolute',width: 55,  height:60,
    top:Platform.OS ==='ios' ? 48 : 35,left:10,
  },
  OptionItem : {
    paddingTop: 7,paddingBottom: 0,marginTop: 0,marginBottom: 0,
  },
  wrapContent :{
    flexDirection:'row',
    alignItems:'center',
    flex:1,
    overflow:'hidden',
  },
  leftContent :{
    justifyContent:'space-between',
    alignItems:'flex-end',
    flex:1,
  },
  rightContent :{
    justifyContent:'space-between',
    alignItems:'flex-start',
    flex:1,
  },
  middleContent :{
    justifyContent:'space-between',
    alignItems:'center',
    flex:1,
  },
  plusStyle :{width:50,height:50,bottom:10,position:'absolute',right:10},
  popover : {
    top: Platform.OS ==='ios' ? 55 :40,
    alignItems:'center',
    position:'absolute',
    width,height:300,
    zIndex:5,
  },
  colorBlack:{color:'#303B50',overflow:'hidden',fontSize:15,},
  colorTextPP :{color:'#B8BBC0'},
  colorNumPP :{fontWeight: 'bold',color:'#2F353F'},
  imgUp:{width: 14,height: 7,top:1,position:'absolute'},
  imgUpInfo :{right:58},
  imgUpShare :{right:20},
  imgMargin: {margin:10},
  listOver:{alignItems:'center',flexDirection:'row',padding:10,borderBottomColor:'#EEEDEE', borderBottomWidth:1,},
  overLayout:{backgroundColor:'#fff',width: width-20,borderRadius:4,overflow:'hidden',top:7},
  show : { display: 'flex'},
  hide : { display: 'none'},
});
