import React from 'react';
import {
  Button,
  Text,
  Thumbnail,
} from 'native-base';
import {StyleSheet, ImageBackground, View, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const logo = require('../img/CC-Cenpromype-05.png');
const image = require('../img/CC-Cenpromype_M1.png');

const Home = ({navigation}) => {

  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <View>
          <Thumbnail square large source={logo} style={styles.logoImg} resizeMode='contain' />
        </View>
        <View>
        <Button rounded warning onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textbtn}>Empezar a explorar</Text>
        </Button>
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
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  logoImg:{
    width: 0.8 * width,
    height: 0.8 * width,
    marginTop: 0.2 * width

  }
});

export default Home;
