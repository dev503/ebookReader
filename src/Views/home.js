import React, {useEffect} from 'react';
import {Button, Text, Thumbnail} from 'native-base';
import {StyleSheet, ImageBackground, View, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('../img/CC-Cenpromype-05.png');
const image = require('../img/CC-Cenpromype_M1.png');

const Home = ({navigation}) => {
   /*useEffect(() => {
   setTimeout(async () => {
      // Si encuentra el token redirige a Dashboard
      if (await AsyncStorage.getItem('session_token')) {
        navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
      } else {
        // Sino a Login
      
        navigation.reset({index: 0, routes: [{name: 'Login'}]});
      }
    }, 5 * 1000);
  }, []);*/

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <View>
          <Thumbnail
            square
            large
            source={logo}
            style={styles.logoImg}
            resizeMode="contain"
          />
        <Text style={styles.textVersion}>V 1.0</Text>
          
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoImg: {
    width: 0.8 * width,
    height: 0.8 * width,
    marginTop: 0.2 * width,
  },
  textVersion: {
    fontSize: 14,
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    marginTop:300
  },
});

export default Home;
