import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { height, width } from '../consts/Dimentions';
import DeviceW from '../consts/DeviceWIndentificator';
import { useDispatch } from 'react-redux';
import CheckAuth from '../redux/middleware/CheckAuth';
import { useNavigation } from '@react-navigation/native';
import { OS } from '../consts/consts';

export default function AuthScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [position, setPosition] = React.useState(0)

  const Submit = () => {
    dispatch(CheckAuth(login, password, navigation))
    setLogin('');
    setPassword('')
  }
  const Focus = (e) => {
    if (e === 'focused') {
      setPosition(-height / 8)
    } else {
      setPosition(0)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.LogContainer, { top: OS === 'iOS' ? position : 0 }]}>

        <Text style={styles.AuthText} >Autorization</Text>

        <View style={styles.block1} >

          <Text style={styles.loginText} >login</Text>

          <TextInput onChangeText={Login => setLogin(Login)}
            value={login}
            style={styles.input} />

        </View>

        <View style={styles.block2} >

          <Text style={styles.passText} >password</Text>

          <TextInput secureTextEntry
            onChangeText={Password => setPassword(Password)}
            value={password}
            style={styles.input}
            onFocus={() => Focus('focused')}
            onBlur={() => Focus()} />

        </View>

        <TouchableOpacity onPress={() => Submit()} style={styles.submit} >

          <Text style={{ fontSize: width / 16, color: 'black', fontWeight: 'bold' }} >Submit</Text>
        </TouchableOpacity>


      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = DeviceW ? StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogContainer: {
    height: height / 1.9,
    width: width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#27569C',

  },
  AuthText: {
    fontSize: width / 16,
    color: '#27569C',
    fontWeight: 'bold'
  },
  block1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  block2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: width / 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: height / 20,
    left: width / -3.3
  },
  passText: {
    fontSize: width / 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: height / 20,
    left: width / -4.2
  },
  input: {
    height: height / 20,
    width: width / 1.3,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#27569C',
    marginTop: height / 50,
    paddingLeft: width / 80,
    color: 'black',
  },
  submit: {
    height: height / 15,
    width: width / 1.3,
    backgroundColor: '#E4B062',
    borderRadius: 10,
    marginTop: height / 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) : StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogContainer: {
    height: height / 2,
    width: width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#27569C',

  },
  AuthText: {
    fontSize: width / 16,
    color: '#27569C',
    fontWeight: 'bold',
  },
  block1: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height / 35,
  },
  block2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginText: {
    fontSize: width / 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: width / 500,
    marginTop: height / 25,
    marginRight: width / 6
  },
  passText: {
    fontSize: width / 18,
    color: 'black',
    fontWeight: 'bold',
    fontWeight: 'bold',
    marginLeft: width / 500,
    marginTop: height / 25,
    marginRight: width / 20
  },
  input: {
    height: height / 20,
    width: width / 1.8,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#27569C',
    marginTop: height / 25,
    paddingLeft: width / 80,
  },
  submit: {
    height: height / 15,
    width: width / 1.3,
    backgroundColor: '#E4B062',
    borderRadius: 10,
    marginTop: height / 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
