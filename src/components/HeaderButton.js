import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { width } from '../consts/Dimentions';
import { useNavigation } from '@react-navigation/native';


export default function HeaderButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
      <Image
        source={require('../img/Goto.png')}
        style={{ width: width / 12.5, height: width / 14 }}
      />
    </TouchableOpacity>
  );
}
