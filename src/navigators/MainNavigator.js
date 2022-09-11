import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthorizationScreen';
import HomeScreen from '../screens/HomeScreen';
import Logo from '../components/logo';
import FullLogo from '../components/FullLogo';
import HeaderButton from '../components/HeaderButton';
import DeviceW from '../consts/DeviceWIndentificator';


const Stack = createNativeStackNavigator();


function MainNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen options={{
        headerLeft: () => DeviceW ? <Logo /> : <FullLogo />,
        headerStyle: { backgroundColor: '#E4B062' }, headerTitle: ''
      }}
        name="Auth" component={AuthScreen} />

      <Stack.Screen options={{
        gestureEnabled: false, headerLeft: () => DeviceW ? <Logo /> : <FullLogo />,
        headerRight: () => <HeaderButton />, headerStyle: { backgroundColor: '#E4B062' }, headerTitle: ''
      }}
        name="Home" component={HomeScreen} />

    </Stack.Navigator>
  );
}

export default MainNavigator;