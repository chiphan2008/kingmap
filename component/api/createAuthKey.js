import { AsyncStorage } from 'react-native';
import postApi from './postApi';
import global from '../global';
const getAuthKey = async () => {
  try {
    let responseJson = await postApi(`${global.url_media}${'/oauth/token'}`,global.auth_key);
    //console.log('======responseJson===========',responseJson);
    AsyncStorage.setItem('@AuthKey:key', JSON.stringify(responseJson));
    return responseJson;
  } catch (error) {
  }

};

export default getAuthKey;
