import * as React from 'react';
import { Image } from 'react-native';
import { width } from '../consts/Dimentions';


export default class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('../img/logo.png')}
        style={{ width: width / 10.5, height: width / 11.8 }}
      />
    );
  }
}