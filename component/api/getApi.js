import { AsyncStorage } from 'react-native';
import createAuthKey from './createAuthKey';
import global from '../global';

const getApi = async (url) => {
  try {
    //AsyncStorage.removeItem('AuthKey');
    //const auth_key = await AsyncStorage.getItem('@AuthKey:key');
    //console.log('@auth_key',auth_key);
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ global.secret_key.access_token,
      },
    }).then(res => res.json());

  } catch (error) {
  }

};

export default getApi;
