import { AsyncStorage } from 'react-native';

const checkLocation = async () => {

  const country = await AsyncStorage.getItem('@CountryLocationKey:key');
  const city = await AsyncStorage.getItem('@CityLocationKey:key');
  if (country === null && city === null) {
      return false;
  }
  return true;

};

export default checkLocation;
