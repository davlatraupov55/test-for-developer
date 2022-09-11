import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { height, width } from '../consts/Dimentions';


export default class FullLogo extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <Image
          source={require('../img/logo.png')}
          style={{ width: width / 12.5, height: width / 13.5 }}
        />
        <Text style={{ fontSize: width / 23, marginLeft: width / 70, fontWeight: 'bold' }} >Каналсервис</Text>
      </View>
    );
  }
}