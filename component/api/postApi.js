import { AsyncStorage } from 'react-native';

const postApi = async (url,param) => {
  try {
    //AsyncStorage.removeItem('AuthKey');
    let response = await fetch(url, {
      method: 'POST',
      headers: {Accept: 'application/json','Content-Type': 'application/vnd.api+json'},
      body: JSON.stringify(param),
    });
    console.log('postApi1',response.json());
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
  }

};

export default postApi;
