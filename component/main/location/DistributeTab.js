/* @flow */

import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, Dimensions, Image,
  TextInput, TouchableOpacity,
  FlatList,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import util from 'util';
import styles from '../../styles';

import closeIC from '../../../src/icon/ic-white/ic-close.png';
import searchIC from '../../../src/icon/ic-gray/ic-search.png';
import infoIC from '../../../src/icon/ic-white/ic-analysis.png';
import socialIC from '../../../src/icon/ic-white/ic-social.png';



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
      headCatStyle,headContent, wrapDistribute,wrapFilter,
      show,hide,colorTextPP,colorNumPP,
      wrapListLoc,flatItem,flatlistItem,imgFlatItemLoc,wrapFlatRight

    } = styles;

    return (
      <View style={container}>

      <View style={headCatStyle}>
          <View style={headContent}>
              <TouchableOpacity>
              <Image source={closeIC} style={{width:20, height:20,marginTop:5}} />
              </TouchableOpacity>
              <TouchableOpacity
                    style={{alignItems:'center'}}
                    onPress={()=>this.setState({showCat :!this.state.showCat})}
                    >
                    <Text style={{color:'white',fontSize:18}}>Phân loại</Text>

              </TouchableOpacity>
              <View></View>
          </View>
      </View>
<View style={wrapFilter}>
        <View style={wrapDistribute}>

                          <FlatList
                             data={[
                               {key: 'Joel'},
                               {key: 'John'},
                               {key: 'Jillian'},
                               {key: 'Jimmy'},
                               {key: 'Julie'},
                             ]}
                             renderItem={({item}) => (

                               <View style={flatlistItem}>
                               <TouchableOpacity style={flatItem}>
                                   <Image style={imgFlatItemLoc} source={{uri:'https://diadiem.kingmap.vn/upload/img_content_thumbnail/1506316541_avatar_yXvdIt6ql7nkD.jpeg'}} />
                                   <Text>{item.key}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={flatItem}>
                                  <Image style={imgFlatItemLoc} source={{uri:'https://diadiem.kingmap.vn/upload/img_content_thumbnail/1506316541_avatar_yXvdIt6ql7nkD.jpeg'}} />
                                  <Text>{item.key}</Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={flatItem}>
                                 <Image style={imgFlatItemLoc} source={{uri:'https://diadiem.kingmap.vn/upload/img_content_thumbnail/1506316541_avatar_yXvdIt6ql7nkD.jpeg'}} />
                                 <Text>{item.key}</Text>
                            </TouchableOpacity>
                        </View>

                             )}

                           />

        </View>

      </View>



      </View>
    );
  }
}
