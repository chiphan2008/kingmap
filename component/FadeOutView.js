import React, { Component } from 'react';
import { Animated, Image, View, Dimensions } from 'react-native';
import CityScreen from './location/CityScreen';
import IntroScreen from './IntroScreen';
import LogoWhite from '../src/icon/Logo-intro.png';
const {height, width} = Dimensions.get('window');

export default class FadeOutView extends Component {
  state = {
    fadeAnimOut: new Animated.Value(1),
    fadeAnimIn: new Animated.Value(0),
  }
  componentDidMount() {

    Animated.parallel([
      Animated.timing(                  // Animate over time
        this.state.fadeAnimOut,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 5000,
        }),
        Animated.timing(                  // Animate over time
          this.state.fadeAnimIn,            // The animated value to drive
          {
            toValue: 1,                   // Animate to opacity: 1 (opaque)
            duration: 5000,
          }
        ),

  ]).start();

  }
  render() {
    //const CurrentView = this.state.fadeAnimOut == 0 ?  CityScreen : IntroScreen;
    let { fadeAnimOut, fadeAnimIn } = this.state;
    return (
      <View>
      <Animated.View                 // Special animatable View
        style={{
          width,
          height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D0021B',
          position: 'absolute',
          opacity: fadeAnimOut,
        }}
      >
        <IntroScreen />
      </Animated.View>

          <Animated.View                 // Special animatable View
            style={{
              width,
              height,
              justifyContent: 'center',
              alignItems: 'center',
              //backgroundColor: '#D0021B',
              opacity: fadeAnimIn,
            }}
          >
            <CityScreen />
          </Animated.View>

      </View>
    );
  }
}
