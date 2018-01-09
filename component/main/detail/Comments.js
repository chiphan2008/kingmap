/* @flow */

import React, { Component } from 'react';
import {
  View,Text,StyleSheet,Image,TextInput,
  Platform,Dimensions,TouchableOpacity,
} from 'react-native';
import util from 'util';
import Moment from 'moment';
import postCommentApi from '../../api/postCommentApi';
import global from '../../global';
import checkLogin from '../../api/checkLogin';

import likeIcon from '../../../src/icon/ic-like.png';
import likeBlueIcon from '../../../src/icon/ic-blue/ic-like.png';
import commentsIcon from '../../../src/icon/ic-comments.png';
import ImageIcon from '../../../src/icon/ic-Image.png';
import sendEmailIcon from '../../../src/icon/ic-send-email.png';

const {width,height} = Dimensions.get('window');
export default class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComments: 0,
      user_id:0,
      inputComment:'',
      inputChildComment:'',
      arrIdComment:{},
    }
  }
  requestLogin(comment_id){
    checkLogin().then(e=>{
      if(e.id===undefined){
        this.props.navigation.navigate('LoginScr');
      }else{
        this.setState({user_id:e.id,showComments:comment_id})
      }
    });
  }

  postComment(comment_id){
    if(this.state.inputChildComment!=='' || this.state.inputComment!==''){
      const arr = new FormData();
      arr.append('user_id',this.state.user_id);
      arr.append('content_id',this.props.idContent);
      arr.append('comment_id',comment_id);
      arr.append('content',comment_id===0 ? this.state.inputComment.toString() : this.state.inputChildComment.toString());

      postCommentApi(`${global.url}${'content-create-comment'}`,arr);
      if(comment_id===0)
      this.setState({inputComment:''});
      else
      this.setState({inputChildComment:''});
    }
  }

  likeComment(comment_id){
    //this.setState({arrIdComment:this.state.arrIdComment.concat(e.id)})
    const arr = new FormData();
    arr.append('user_id',this.state.user_id);
    arr.append('comment_id',comment_id);
    postCommentApi(`${global.url}${'content-like-comment'}`,arr).then(e=>{
      this.setState({ arrIdComment: Object.assign(this.state.arrIdComment,{[comment_id]:e.data.like}) });
    });
  }

  render() {
    //console.log('this.state.arrIdComment',this.state.arrIdComment);
    const {
      txtComments,padLeft,colorText,mrgTop,show,hide,rowFlex
    } = styles;
    //console.log("this.props.navigation=",util.inspect(this.props.navigation,false,null));
    const {idContent,listComment} = this.props;
    return (
      <View>
          <View>
            <TextInput onFocus={()=>this.requestLogin(0)} style={[txtComments,padLeft]} underlineColorAndroid='transparent'
            placeholder="Bình luận của bạn ..."
            onChangeText={(text) => this.setState({inputComment: text})}
            value={this.state.inputComment}
             />
            <TouchableOpacity style={{position:'absolute',right:45,top:Platform.OS==='ios' ? 15 : 18}}>
            <Image source={ImageIcon} style={{width:20,height:20,}} />
            </TouchableOpacity>

            <TouchableOpacity style={{position:'absolute',right:15,top:Platform.OS==='ios' ? 15 : 18}}
            onPress={()=>this.postComment(0)}
            >
            <Image source={sendEmailIcon} style={{width:20,height:20,}} />
            </TouchableOpacity>
          </View>
          {listComment.length>0 ?
            listComment.map((e)=>(
              <View onLayout={()=>this.setState({arrIdComment:Object.assign(this.state.arrIdComment,{[e.id]:e.like_comment}) })} key={e.id} style={{borderBottomWidth:1,borderBottomColor:'#E1E7EC',paddingBottom:10}}>
              <View style={rowFlex}>
                <Image source={{uri:`${e._comment_by.avatar}`}} style={{width:66,height:66,borderRadius:33}} />
                <View>
                    <View style={{paddingLeft:10}}>
                      <Text style={colorText}>{e._comment_by.full_name}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:10,marginTop:5}}>
                        <Text>{Moment(e.created_at).format('h:m A')}</Text><Text> | </Text><Text>{Moment(e.created_at).format('DD/MM/YYYY')}</Text>
                    </View>
                </View>
              </View>

              <View style={mrgTop}>
                  <Text>{e.content}</Text>
                  <View style={{flexDirection:'row',marginRight:5,marginTop:5}}>
                    {e._images.length>0 ?
                      e._images.map(img =>(
                        <Image key={img.id} source={{uri:`${global.url_media}${img.thumb}`}} style={{width:65,height:65,marginRight:7}} />
                      ))
                      :
                      <View></View>
                    }
                  </View>
              </View>

              <View style={{padding:15,paddingLeft:0,flexDirection:'row'}}>
                  <TouchableOpacity style={{flexDirection:'row',}}
                  onPress={()=>this.likeComment(e.id)}>
                    <Image style={{width:22,height:18,marginRight:5}} source={likeIcon} />
                    <Text>{this.state.arrIdComment[e.id]} like</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{this.setState({showComments:e.id}); }}
                  style={{flexDirection:'row',marginLeft:20}}>
                    <Image style={{width:22,height:22,marginRight:5}} source={commentsIcon} />
                    <Text>Comments</Text>
                  </TouchableOpacity>
              </View>

              <View style={this.state.showComments===e.id ? show : hide}>
              <View>
                <TextInput onFocus={()=>this.requestLogin(this.state.showComments)} style={[txtComments,padLeft]} underlineColorAndroid='transparent'
                placeholder="Bình luận của bạn ..."
                onChangeText={(cm) => this.setState({inputChildComment: cm})}
                value={this.state.inputChildComment}
                 />
                <TouchableOpacity style={{position:'absolute',right:45,top:Platform.OS==='ios' ? 15 : 18}}>
                <Image source={ImageIcon} style={{width:20,height:20,}} />
                </TouchableOpacity>

                <TouchableOpacity style={{position:'absolute',right:15,top:Platform.OS==='ios' ? 15 : 18}}
                onPress={()=>this.postComment(e.id)}
                >
                <Image source={sendEmailIcon} style={{width:20,height:20,}} />
                </TouchableOpacity>
              </View>
              </View>

                {e._replies.length>0 ?
                  e._replies.map(r =>(
                    <View onLayout={()=>this.setState({arrIdComment:Object.assign(this.state.arrIdComment,{[r.id]:r.like_comment}) })} style={{width:width-70,marginLeft:70,marginTop:10,borderTopWidth:1,borderTopColor:'#E1E7EC'}} key={r.id}>
                    <View style={rowFlex}>
                      <Image source={{uri:`${r._comment_by.avatar}`}} style={{width:66,height:66,borderRadius:33}} />
                      <View>
                          <View style={{paddingLeft:10}}>
                            <Text style={colorText}>{r._comment_by.full_name}</Text>
                          </View>
                          <View style={{flexDirection:'row',marginLeft:10,marginTop:5}}>
                              <Text>{Moment(r.created_at).format('h:m A')}</Text><Text> | </Text><Text>{Moment(r.created_at).format('DD/MM/YYYY')}</Text>
                          </View>
                      </View>
                    </View>

                    <View style={mrgTop}>
                        <Text>{r.content}</Text>
                        <View style={{flexDirection:'row',marginRight:5,marginTop:5}}>
                          {r._images.length>0 ?
                            r._images.map(img =>(
                              <Image key={img.id} source={{uri:`${global.url_media}${img.thumb}`}} style={{width:65,height:65,marginRight:7}} />
                            ))
                            :
                            <View></View>
                          }
                        </View>
                    </View>

                    <View style={{paddingTop:15,paddingLeft:0,flexDirection:'row'}}>
                        <TouchableOpacity style={{flexDirection:'row',}}
                        onPress={()=>this.likeComment(r.id)}>
                          <Image style={{width:22,height:18,marginRight:5}} source={likeIcon} />
                          <Text>{this.state.arrIdComment[r.id]} like</Text>
                        </TouchableOpacity>
                    </View>

                      <View style={rowFlex}>

                      </View>
                    </View>
                  ))

                  :
                  <View></View>
                }


              </View>
            ))

            :
            <View></View>
          }


      </View>
    );
  }
}
const styles = StyleSheet.create({
  show : { display: 'flex'},
  hide : { display: 'none'},
  rowFlex:{flexDirection:'row',paddingLeft:10,paddingRight:10,marginTop:10},
  txtComments:{borderWidth:1,borderColor:'#E1E7EC',borderRadius:3,padding:15,paddingRight:70},
  padLeft:{paddingLeft:15},
  colorText :{color:'#303B50',fontSize:17,marginTop:7},
  mrgTop:{marginTop:10},
});
