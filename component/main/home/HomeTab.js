/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
const {height, width} = Dimensions.get('window');
import SvgUri from 'react-native-svg-uri';

import util from 'util';
import getApi from '../../api/getApi';
import global from '../../global';
import styles from '../../styles.js';

import bgMap from '../../../src/icon/bg-map.png';
//import test from '../../../src/icon/test.svg';
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

export default class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCategory : [],
      other:'Khác',
      selectLang: {
        valueLang : "vn",
        labelLang : "VIE",
      },
      showInfo : false,
      showShare : false,
    };
    arrLang = [{name:'VIE',v:'vn'},{name:'ENG',v:'en'}];
  }
  onSelectLang(value, label) {
    //console.log('value',value)
    this.getCategory(value)
    this.setState({
      selectLang: {
        valueLang : value,
        labelLang : label,
      },
      other: value==='vn' ? 'Khác' : 'Other',
    });

  }
  getCategory(lang){
    getApi(global.url+'categories?language='+lang)
    .then(arrCategory => {
        this.setState({ listCategory: this.state.listCategory = arrCategory.data });
    })
    .catch(err => console.log(err));
  }
  componentWillMount() {
      this.getCategory(this.state.selectLang.valueLang);
  }

  render() {
    const {navigate} = this.props.navigation;
    //console.log("this.props.Hometab=",util.inspect(this.state.listCategory,false,null));
    const {
      container, bgImg,
      headStyle, headContent,imgLogoTop,imgSocial, imgInfo,wrapIcRight,
      selectBox,optionListStyle,OptionItem,inputSearch,show,hide,colorTextPP,colorNumPP,
      wrapContent,imgContent,square,wrapCircle,logoCenter,circle1,circle2,circle3,circle4,circle5,circle6,circle7,circle8,labelCat,
      plusStyle,imgPlusStyle,popover,overLayout,listOver,imgMargin,imgUp,imgUpInfo,imgUpShare
    } = styles;

    return (
      <View style={container}>
      <Image source={bgMap} style={bgImg} />
        <View style={headStyle}>
            <View style={headContent}>
            <Select
                  onSelect = {this.onSelectLang.bind(this)}
                  defaultText  = {this.state.selectLang.labelLang}
                  style = {selectBox}
                  textStyle = {{color:'#fff'}}
                  optionListStyle={optionListStyle}
                  indicatorColor="#fff"
                  indicator="down"
                  indicatorSize={7}
                  transparent
                >
                {arrLang.map((e,i)=>(
                    <Option style={OptionItem} key={i} value ={e.v}>{e.name}</Option>
                ))}

            </Select>
            <Image source={logoTop} style={imgLogoTop} />
                <View style={wrapIcRight}>
                  <TouchableOpacity onPress={()=> this.setState({showInfo:!this.state.showInfo,showShare:false}) } >
                    <Image source={infoIC} style={imgInfo} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.setState({showShare:!this.state.showShare,showInfo:false}) } >
                      <Image source={socialIC} style={imgSocial} />
                  </TouchableOpacity>
                </View>

          </View>
          <TextInput underlineColorAndroid='transparent' placeholder="Find place" style={inputSearch} />
          <Image style={{width:16,height:16,top:-28,left:-50}} source={searchIC} />
        </View>

        <View style={wrapContent}>
            <View style={square}>

            {
              this.state.listCategory.map((e)=>{
                switch (e.alias) {
                  case 'do-an':
                      return (<TouchableOpacity
                          key={e.id}
                          style={[wrapCircle,circle1]}
                          onPress={() => navigate('CatScr',{idCat:e.id,idCat:e.id,name:e.name,sub_cat:e.sub_category, }) }
                          >
                        <Image style={imgContent} source={foodOval} />
                        <Text style={labelCat}  >{e.name}</Text>
                      </TouchableOpacity>)
                  case 'thuc-uong':
                      return (<TouchableOpacity
                          key={e.id}
                          style={[wrapCircle,circle2]}
                          onPress={() => navigate('CatScr',{idCat:e.id,name:e.name,sub_cat:e.sub_category}) }
                          >
                        <Image style={imgContent} source={coffeeOval} />
                        <Text style={labelCat}  >{e.name}</Text>
                      </TouchableOpacity>);
                  case 'thoi-trang':
                      return (<TouchableOpacity
                          key={e.id}
                          style={[wrapCircle,circle3]}
                          onPress={() => navigate('CatScr',{idCat:e.id,name:e.name,sub_cat:e.sub_category}) }
                          >
                        <Image style={imgContent} source={coffeeOval} />
                        <Text style={labelCat}  >{e.name}</Text>
                      </TouchableOpacity>);
                  case 'ngan-hang':
                      return (<TouchableOpacity
                          key={e.id}
                          style={[wrapCircle,circle4]}
                          onPress={() => navigate('CatScr',{idCat:e.id,name:e.name,sub_cat:e.sub_category}) }
                          >
                        <Image style={imgContent} source={bankOval} />
                        <Text style={labelCat}  >{e.name}</Text>
                      </TouchableOpacity>);
                  case 'giai-tri':
                      return (<TouchableOpacity
                          key={e.id}
                          style={[wrapCircle,circle5]}
                          onPress={() => navigate('CatScr',{idCat:e.id,name:e.name,sub_cat:e.sub_category}) }
                          >
                        <Image style={imgContent} source={entertainmentOval} />
                        <Text style={labelCat}  >{e.name}</Text>
                      </TouchableOpacity>);
                  case 'khach-san':
                      return (<TouchableOpacity
                          key={e.id}
                          style={[wrapCircle,circle6]}
                          onPress={() => navigate('CatScr',{idCat:e.id,name:e.name,sub_cat:e.sub_category}) }
                          >
                        <Image style={imgContent} source={hotelOval} />
                        <Text style={labelCat}  >{e.name}</Text>
                      </TouchableOpacity>);
                case 'mua-sam':
                    return (<TouchableOpacity
                        key={e.id}
                        style={[wrapCircle,circle7]}
                        onPress={() => navigate('CatScr',{idCat:e.id,name:e.name,sub_cat:e.sub_category}) }
                        >
                      <Image style={imgContent} source={shopOval} />
                      <Text style={labelCat}  >{e.name}</Text>
                    </TouchableOpacity>);
                  //default:

                }
              })
            }

              <TouchableOpacity
              onPress={()=>navigate('OtherCatScr')}
              style={[wrapCircle,logoCenter]}>
              <Image style={imgContent} source={logoHome} />
              <Text style={labelCat}>{this.state.other}</Text>
              </TouchableOpacity>

            </View>
        </View>
        <TouchableOpacity style={plusStyle}>
            <Image source={plusIC} style={imgPlusStyle} />
        </TouchableOpacity>
        <View style={[popover, this.state.showInfo ? show : hide]}>

          <Image style={[imgUp,imgUpInfo]} source={upDD} />
            <View style={overLayout}>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={locationDD} />
                    <Text style={colorTextPP}>Địa điểm: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={onlineDD} />
                    <Text style={colorTextPP}>Đang online: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={checkDD} />
                    <Text style={colorTextPP}>Địa điểm mới tham gia: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={likeDD} />
                    <Text style={colorTextPP}>Like: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={socialDD} />
                    <Text style={colorTextPP}>Share: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
            </View>

        </View>

        <View style={[popover, this.state.showShare ? show : hide]}>

          <Image style={[imgUp,imgUpShare]} source={upDD} />
            <View style={overLayout}>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={locationDD} />
                    <Text style={colorTextPP}>Địa điểm: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={onlineDD} />
                    <Text style={colorTextPP}>Đang online: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={checkDD} />
                    <Text style={colorTextPP}>Địa điểm mới tham gia: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={likeDD} />
                    <Text style={colorTextPP}>Like: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
                <View style={listOver}>
                    <Image style={[imgInfo,imgMargin]} source={socialDD} />
                    <Text style={colorTextPP}>Share: <Text style={colorNumPP}>45.8k</Text></Text>
                </View>
            </View>

        </View>

      </View>
    );
  }
}
