import {Dimensions,Platform} from 'react-native';
const {height, width} = Dimensions.get('window');
module.exports = {
  container: {flex: 1,backgroundColor:'#F1F2F5'},
  bgImg : {
    width,height,position: 'absolute',justifyContent: 'center',alignItems: 'center',alignSelf: 'stretch',resizeMode: 'stretch',
  },
  headStyle : {
      backgroundColor: '#D0021B',paddingTop: Platform.OS==='ios' ? 25 : 10, alignItems: 'center',height: 110,
      position:'relative',zIndex:5,
  },
  headLocationStyle : {
      backgroundColor: '#D0021B',paddingTop: Platform.OS==='ios' ? 25 : 10, alignItems: 'center',height: 75,
      position:'relative',zIndex:5,
  },
  headCatStyle : {
      backgroundColor: '#D0021B',paddingTop: Platform.OS==='ios' ? 30 : 20, alignItems: 'center',height: 65,
      position:'relative',zIndex:5,
  },
  wrapDistribute:{
    width:width-20,borderRadius:5,backgroundColor:'#fff',minHeight:height,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#999',
    shadowOpacity: .5,
  },
  wrapFilter:{alignItems:'center',marginTop:15,marginBottom:15,},
  filterFrame:{width:width-40,justifyContent:'space-between',alignItems:'center',flexDirection:'row'},
  inputSearch : {
    marginTop: 8,width:width-40,backgroundColor:'#fff',borderRadius:5,padding:10,textAlign:'center',
  },
  selectBoxLoc:{
    backgroundColor:'#fff',
    width:100,
    borderRadius:4,
    borderColor:'#CED0D5',
  },
  optionListLoc:{
    backgroundColor:'#fff',
    borderColor:'transparent',
    position:'absolute',width: 55,  height:60,
    top:Platform.OS ==='ios' ? 48 : 35,left:10,
  },OptionItemLoc:{
    paddingTop: 7,paddingBottom: 0,marginTop: 0,marginBottom: 0,
  },
  wrapListLoc:{
    backgroundColor:'#fff',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#ddd',
    shadowOpacity: .5,
    minHeight: height-50,
    padding:20,
  },
  flatItemLoc:{
    flexDirection:'row',
    paddingBottom:20,
  },
  flatItem:{
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#E3E4E8',
    borderRightWidth:1,
    borderRightColor:'#E3E4E8',
    width:(width-24)/3,
    padding:10,
    paddingTop:20,
  },
  flatlistItem:{
    justifyContent:'space-between',
    flexDirection:'row',
  },
  imgFlatItem:{
    marginRight:10,
    width:90,height:90,
  },
  imgFlatItemLoc:{

    width:90,height:90,
  },
  wrapFlatRight:{

  },
  headContent : {
      width: width - 40,justifyContent: 'space-between',flexDirection: 'row',
  },
  imgLogoTop : {
      width: 138,height: 25,
  },
  imgContent : {
      width: 65,height: 65,marginBottom:10,
  },
  square:{
    width:300,
    height:300,
    alignItems:'center',
    justifyContent:'center',
  },
  wrapCircle:{
    position:'absolute',
    flex:1,
    alignItems:'center',

  },
  circle1:{top:-5,left :120,},
  circle2:{top:44,left:222,},
  circle3:{top:154,left :247,},
  circle4:{top:242,left :176,},
  circle5:{top:242,left :64,},
  circle6:{top:154,left :-7,},
  circle7:{top:44,left :22,},
  logoCenter:{top:120},

  wrapContent :{
    //flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  labelCat :{
    backgroundColor:'transparent',textAlign:'center',
  },
  wrapIcRight:{
    width:55,justifyContent: 'space-between',flexDirection: 'row',marginTop: 7,
  },
  imgInfo : {
      width: 20,height: 20,
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
  plusStyle :{bottom:10,position:'absolute',right:10,
  },
  imgPlusStyle:{
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#999',
    shadowOpacity: .2,
    width:50,height:50,

  },
  popover : {
    top: Platform.OS ==='ios' ? 55 :40,
    alignItems:'center',
    position:'absolute',
    width,height:300,
    zIndex:5,
  },
  colorTextPP :{color:'#B8BBC0'},
  colorText :{color:'#303B50',fontSize:17},
  colorNumPP :{fontWeight: 'bold',color:'#2F353F'},
  imgUp:{width: 14,height: 7,top:1,position:'absolute'},
  imgUpInfo :{right:58},
  imgUpShare :{right:20},
  imgMargin: {margin:10},
  listCatOver:{paddingRight:20,paddingBottom:20,paddingLeft:20,},
  listOver:{alignItems:'center',flexDirection:'row',padding:10,borderBottomColor:'#EEEDEE', borderBottomWidth:1,},
  overLayout:{backgroundColor:'#fff',width: width-20,borderRadius:4,overflow:'hidden',top:7},
  overLayoutCat:{
      backgroundColor:'#fff',width: 150,
      top: Platform.OS==='ios' ? 10 : 25,
      paddingTop:20,
      borderColor:'#E1E7EC',
      zIndex:4,
      shadowOffset:{  width: 2,  height: 2,  },
      shadowColor: '#ddd',
      shadowOpacity: .8,
  },
  catInfoOver:{padding:15,bottom:0,zIndex:6,backgroundColor:'#fff',width,flexDirection:'row'},
  wrapInfoOver:{flex:1,flexWrap: 'wrap',},
  txtTitleOver:{color:'#2F353F',fontSize:20,marginBottom:10,maxHeight:50,overflow:'hidden'},
  txtAddrOver:{color:'#6587A8',fontSize:14,height:40,},
  show : { display: 'flex'},
  hide : { display: 'none'},

}
