import React, { Component } from 'react';
import { Animated, View, Dimensions } from 'react-native';
import CityScreen from './location/CityScreen';
import LogoWhite from '../src/icon/Logo-intro.png';
const {height, width} = Dimensions.get('window');

export default class FadeInView extends Component {
   state = {
    fadeAnim: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 5000,
        }
      ),
    ]).start();

  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        <CityScreen style={{


                // Bind opacity to animated value
        }} />
      </Animated.View>
    );
  }
}
