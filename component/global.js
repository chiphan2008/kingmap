/* @flow */

import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

let auth_key = {grant_type:'client_credentials',client_id:1,client_secret:'NKbqe8ovfMetW8WYimVN7MtNHSsy6tCo6mm7WU9Y'};
AsyncStorage.setItem('AuthKey', JSON.stringify(auth_key), () => {
    AsyncStorage.getItem('AuthKey', (err, result) => {
      global.auth_key_client = result;
    });
});
