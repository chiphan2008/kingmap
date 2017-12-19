import { AsyncStorage } from 'react-native';
import postApi from './postApi';
import global from '../global';
const getAuthKey = async () => {
  try {
    //let responseJson = postApi(global.url+'oauth/token',global.auth_key);

    //console.log('responseJson',responseJson);
    AsyncStorage.setItem('@AuthKey:key', JSON.stringify(global.secret_key));
    return responseJson;
  } catch (error) {
  }

};

export default getAuthKey;
