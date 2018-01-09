/* @flow */

import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,TextInput,
  Platform,Dimensions,TouchableOpacity,
} from 'react-native';
import util from 'util';
import arrowLeft from '../../../src/icon/ic-white/arrow-left.png';
import logoTop from '../../../src/icon/ic-white/Logo-ngang.png';
import searchIC from '../../../src/icon/ic-gray/ic-search.png';

import socialIC from '../../../src/icon/ic-white/ic-social.png';
import saveIC from '../../../src/icon/ic-white/ic-save.png';
import locationIC from '../../../src/icon/ic-white/ic-location.png';
import starIC from '../../../src/icon/ic-white/ic-star.png';

const {width,height} = Dimensions.get('window');
export default class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {
      headStyle,headContent,imgLogoTop,voteIC,
      inputSearch,wrapHeadBottom,colorWhite,imgCheckin,
      shareIC,
    } = styles;
    //console.log("this.props.navigation=",util.inspect(this.props.navigation,false,null));
    const {goBack} = this.props.navigation;
    return (
      <View>
      <View style={headStyle}>
          <View style={headContent}>
          <TouchableOpacity
          onPress={()=>goBack()}
          >
          <Image source={arrowLeft} style={{width:16, height:16,marginTop:5}} />
          </TouchableOpacity>
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
                <Image source={starIC} style={voteIC} />
                <Text style={colorWhite}>Yêu thích</Text>
            </View>
            <View  style={{alignItems:'center'}}>
                <Image source={locationIC} style={imgCheckin} />
                <Text style={colorWhite}>Check in</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Image source={socialIC} style={shareIC} />
                <Text style={colorWhite}>Chia sẻ</Text>
            </View>
            <View  style={{alignItems:'center'}}>
                <Image source={saveIC} style={imgCheckin} />
                <Text style={colorWhite}>Sưu tập</Text>
            </View>
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headStyle : {
      backgroundColor: '#D0021B',paddingTop: Platform.OS==='ios' ? 25 : 10, alignItems: 'center',height: 110,
      position:'relative',zIndex:5,
  },
  headContent : {
      width: width - 40,justifyContent: 'space-between',flexDirection: 'row',
  },
  imgLogoTop : {
      width: 138,height: 25,
  },
  voteIC:{width:23,height:22,marginBottom:5},
  inputSearch : {
    marginTop: 8,width:width-40,backgroundColor:'#fff',borderRadius:5,padding:10,textAlign:'center',
  },
  wrapHeadBottom:{height:65,backgroundColor:'#2F353F',alignItems:'center',justifyContent:'center'},
  colorWhite:{
    color:'#fff',
    fontSize:15,
  },
  imgCheckin:{width:20,height:23,marginBottom:5,},
  shareIC:{width:21,height:23,marginBottom:5},
});
