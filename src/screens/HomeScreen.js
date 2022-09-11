import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { height, width } from '../consts/Dimentions';
import { useDispatch, useSelector } from 'react-redux';
import GetPhotos from '../redux/middleware/GetPhotos';
import LottieView from 'lottie-react-native';
import animation from '../lottie';
import Posts from '../components/Post';
import shortid from 'shortid';


export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPhotos())
  }, [])

  const photos = useSelector(state => state.photos);
  const users = useSelector(state => state.users);
  const posts = useSelector(state => state.posts);
  const isLoaded = useSelector(state => state.isLoaded);

  let Data = users.map((e) => {
    let temp = photos.find(element => element.albumId === e.id)
    if (temp.url) {
      e.url = temp.url;
      let temp2 = posts.find(element => element.id === e.id)
      if (temp2.title) {
        e.title = temp2.title;
        e.body = temp2.body;
      }
    }
    return e;
  })
  return (
    <SafeAreaView style={styles.container}>

      <LottieView style={{ position: 'relative', width: width / 1.8, display: isLoaded ? 'none' : 'flex' }}
        autoPlay
        loop
        source={animation.lottieFiles.preloader}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }} style={{ display: isLoaded ? 'flex' : 'none', width: width }} >

        {Data.map(item => (

          <Posts data={item} key={shortid.generate()} />
        ))
        }

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    height: height / 3,
    width: width / 1.1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#27569C',
    justifyContent: 'center'
  },
  title: {
    fontSize: width / 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: width / 22,
    fontWeight: 'bold',
    width: width / 1.35,
    marginLeft: width / 50
  }
})