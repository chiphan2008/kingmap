import { AsyncStorage } from 'react-native';

const postApi = async (url,param) => {
  try {
    //AsyncStorage.removeItem('AuthKey');
    //console.log('==========url,param===========',url,param);
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(param),
      });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
  }

};

export default postApi;
