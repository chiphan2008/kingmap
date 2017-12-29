/* @flow */

import React, { Component } from 'react';
import {Platform, ScrollView, FlatList, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import arrTest from '../arrTest';
import global from '../global';

import arrowLeft from '../../src/icon/ic-white/arrow-left.png';
import logoTop from '../../src/icon/ic-white/Logo-ngang.png';
import searchIC from '../../src/icon/ic-gray/ic-search.png';
import infoIC from '../../src/icon/ic-white/ic-analysis.png';
import socialIC from '../../src/icon/ic-white/ic-social.png';
import saveIC from '../../src/icon/ic-white/ic-save.png';
import locationIC from '../../src/icon/ic-white/ic-location.png';
import starIC from '../../src/icon/ic-white/ic-star.png';
import onlineIC from '../../src/icon/ic-green/ic-online.png';

import locationDarkIC from '../../src/icon/ic-blue/ic-location-dark.png';
import phoneIC from '../../src/icon/ic-blue/ic-phone.png';
import priceIC from '../../src/icon/ic-blue/ic-price.png';
import timeIC from '../../src/icon/ic-blue/ic-time.png';
import mailIC from '../../src/icon/ic-blue/ic-mail.png';

import likeIcon from '../../src/icon/ic-like.png';
import favoriteIcon from '../../src/icon/ic-favorite.png';



import {Select, Option} from "react-native-chooser";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueLang : "VIE",
      showInfo : false,
      showShare : false,
    }
  }
  onSelectLang(value, label) {
    this.setState({
      valueLang : value
    });
  }
  goToCat(){
    this.props.navigation.navigate('LocationT');
  }
  render() {
    const {navigation} = this.props;
    //console.log('arrTest',arrTest);
    //console.log("this.props.Hometab=",util.inspect(this.props.navigation,false,null));
    const {
      container, bgImg,colorWhite,wrapHeadBottom,likeIC,shareIC,imgIC,imgOnline,
      headStyle, headContent,imgLogoTop,imgSocial, imgInfo,aligncenter,imgDetailContent,
      selectBox,optionListStyle,OptionItem,inputSearch,show,hide,colorTextPP,colorNumPP,
      wrapContent,leftContent,rightContent,middleContent,imgContent,labelCat,wrapImgDetail,
      wrapContentDetail,rowFlex,imgMail,marRight,colorContent,imgContentIC,imgCheckin,imgICLocation,imgICMail,
      rowFlexBottom,favIC,colorRed,spaceContent,rowFlexImg,
      titleSpace,sizeTitle,imgSpace,
    } = styles;

    return (
      <ScrollView style={container}>
        <View style={headStyle}>
            <View style={headContent}>
            <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
                <Image source={logoTop} style={imgLogoTop} />
                <View></View>
            </View>
            <View style={{marginTop:Platform.OS==='ios' ? 7 :10}}></View>
          <TextInput underlineColorAndroid='transparent' placeholder="Find place" style={inputSearch} />
          <Image style={{width:16,height:16,top:-28,left:-50}} source={searchIC} />
        </View>


        <View style={wrapHeadBottom}>
          <View style={[headContent]}>
              <View style={{alignItems:'center'}}>
                  <Image source={starIC} style={likeIC} />
                  <Text style={colorWhite}>Yêu thích</Text>
              </View>
              <View  style={{alignItems:'center'}}>
                  <Image source={locationIC} style={imgCheckin} />
                  <Text style={colorWhite}>Check in</Text>
              </View>
              <View  style={{alignItems:'center'}}>
                  <Image source={socialIC} style={shareIC} />
                  <Text style={colorWhite}>Chia sẻ</Text>
              </View>
              <View  style={{alignItems:'center'}}>
                  <Image source={saveIC} style={imgCheckin} />
                  <Text style={colorWhite}>Sưu tập</Text>
              </View>
          </View>
        </View>

        <View style={wrapContentDetail}>
          <View style={rowFlex}>
              <View style={wrapImgDetail}>
              <Image style={imgDetailContent} source={{uri:`${global.url_media}${arrTest.data[0].content.avatar}`}} />
              <Image source={onlineIC} style={imgOnline} />
              <Text style={{fontSize:17,color:'#9FD56A'}}>Online</Text>
              </View>
              <View style={{padding:10,width:width-100,}}>
              <Text numberOfLines={2} style={{fontSize:26,color:'#1C263D'}}>{arrTest.data[0].content.name}</Text>
              </View>
          </View>


          <View style={rowFlex}>
            <Image style={[imgICLocation,marRight]} source={locationDarkIC} />
            <Text style={colorContent}>{`${arrTest.data[0].content.address}${', '}${arrTest.data[0].content._district.name}${', '}${arrTest.data[0].content._city.name}`}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgContentIC,marRight]} source={phoneIC} />
            <Text style={colorContent}>{arrTest.data[0].content.phone}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgICMail,marRight]} source={mailIC} />
            <Text style={colorContent}>{arrTest.data[0].content.mail}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgContentIC,marRight]} source={timeIC} />
            <Text style={colorContent}>{`${arrTest.data[0].content.open_from}${' - '}${arrTest.data[0].content.open_to}`}</Text>
          </View>

          <View style={rowFlex}>
            <Image style={[imgContentIC,marRight]} source={priceIC} />
            <Text style={colorContent}>{`${arrTest.data[0].content.price_from}${' - '}${arrTest.data[0].content.price_to}`}</Text>
          </View>

          <View style={rowFlexBottom}>
              <Image source={likeIcon} style={[likeIC]} />
              <Text style={[marRight,colorRed]}>{arrTest.data[0].content.like}</Text>
              <Text style={marRight}> | </Text>
              <Image source={favoriteIcon} style={favIC} />
              <Image source={favoriteIcon} style={favIC} />
              <Image source={favoriteIcon} style={favIC} />
              <Image source={favoriteIcon} style={[favIC,marRight]} />
              <Text>({arrTest.data[0].content.vote})</Text>
          </View>

      </View>

      <View style={spaceContent}>
          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>KHÔNG GIAN ({arrTest.data[0].image_space.length})</Text>
              <Text>Xem tất cả >></Text>
          </View>
          <View style={rowFlexImg}>
          <Image source={{uri :`${global.url_media}${arrTest.data[0].image_space[0]}`}} style={imgSpace}/>
          <Image source={{uri :`${global.url_media}${arrTest.data[0].image_space[1]}`}} style={imgSpace}/>
          </View>

          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>MENU</Text>
              <Text>Xem tất cả >></Text>
          </View>
          <View style={rowFlexImg}>
          <Image source={{uri :`${global.url_media}${arrTest.data[0].image_menu[0]}`}} style={imgSpace}/>
          <Image source={{uri :`${global.url_media}${arrTest.data[0].image_menu[1]}`}} style={imgSpace}/>
          </View>

          <View style={titleSpace}>
              <Text style={[colorNumPP,sizeTitle]}>VIDEO</Text>
              <Text>Xem tất cả >></Text>
          </View>
          <View style={rowFlexImg}>
          <Image source={{uri :`${global.url_media}${arrTest.data[0].image_space[0]}`}} style={imgSpace}/>
          <Image source={{uri :`${global.url_media}${arrTest.data[0].image_space[1]}`}} style={imgSpace}/>
          </View>
      </View>

      <View style={wrapContentDetail}>
        <View style={rowFlex}>
        <Text>Xem tất cả >></Text>
        </View>
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  wrapHeadBottom:{height:65,backgroundColor:'#2F353F',alignItems:'center',justifyContent:'center'},
  shareIC:{width:21,height:23,marginBottom:5},
  imgIC:{width:21,height:23,marginBottom:5},
  imgCheckin:{width:20,height:23,},
  imgContentIC:{width:16,height:16,},
  imgICLocation:{width:14,height:16,},
  imgICMail:{width:16,height:12,marginTop:5},
  imgMail:{width:22,height:17},
  likeIC:{width:25,height:21,marginRight:7},
  favIC:{width:22,height:21,marginRight:2},
  colorRed:{color:'#BE2826'},
  colorContent:{color:'#6587A8'},
  colorWhite:{
    color:'#fff',
  },
  spaceContent : {
      width: width - 20,paddingLeft:20
  },
  imgSpace:{
    width:Platform.OS==='ios' ? 160 : 200,
    height:Platform.OS==='ios' ? 160 : 200,
    marginRight:20
  },
  sizeTitle:{fontSize:20},
  titleSpace:{flexDirection:'row',justifyContent:'space-between',padding:30,paddingLeft:0,paddingRight:20,},
  marRight:{marginRight:10},
  rowFlex:{flexDirection:'row',padding:5,paddingLeft:10,marginTop:10},
  rowFlexImg:{flexDirection:'row',marginBottom:20},
  rowFlexBottom:{flexDirection:'row',padding:5,paddingLeft:10,marginTop:15,marginBottom:15,alignItems:'flex-end'},

  wrapContentDetail:{flexWrap:'wrap',flex:1,padding:10,backgroundColor:'#fff',width},
  headStyle : {
      backgroundColor: '#D0021B',paddingTop: Platform.OS==='ios' ? 25 : 10, alignItems: 'center',height: 110,
      position:'relative',zIndex:5,
  },
  inputSearch : {
    marginTop: 8,width:width-40,backgroundColor:'#fff',borderRadius:5,padding:10,textAlign:'center',
  },
  headContent : {
      width: width - 40,justifyContent: 'space-between',flexDirection: 'row',
  },
  imgLogoTop : {
      width: 138,height: 25,
  },
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
