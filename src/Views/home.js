import React from 'react';
import {
  Button,
  Text,
  Thumbnail,
} from 'native-base';
import {StyleSheet, ImageBackground, View} from 'react-native';

const logo = require('../img/CC-Cenpromype-05.png');
const image = require('../img/CC-Cenpromype_M1.png');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View>
          <Thumbnail square large source={logo} style={{height: 200, width: 225, marginBottom: 20 }} />
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textbtn: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold'
  }
});

export default Home;
