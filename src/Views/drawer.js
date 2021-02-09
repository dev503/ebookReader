import React, {useState} from 'react';
import * as axios from 'axios';
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {Button, Text, Thumbnail} from 'native-base';
const {width} = Dimensions.get('window');
const image = require('../img/CC-Cenpromype-09.png');
const fondo = require('../img/CC-Cenpromype-04.png');
const personIco = require('../img/CC-Cenpromype-12.png');
const fileIco = require('../img/CC-Cenpromype-13.png');
const outIco = require('../img/CC-Cenpromype-15.png');
const lockIco = require('../img/CC-Cenpromype-14.png');

const Drawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.background}>
        <View>
          <Thumbnail large source={image} style={styles.logoIco} />
        </View>
        <View style={{marginTop: 16}}>
          <View style={styles.up}>
            <Image style={styles.iconTop} source={personIco} />
            <Text style={styles.textInput}>Mi Perfil</Text>
          </View>
          <View style={styles.up}>
            <Image style={styles.iconTop} source={fileIco} />
            <Text style={styles.textInput}>Mis publicaciones</Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: 0.09 * width,
          }}>
          <View style={styles.down}>
            <Image style={styles.iconButton} source={lockIco} />
            <Text style={styles.textInputDown}>Políticas de uso</Text>
          </View>
          <View style={styles.down}>
            <Image style={styles.iconButton} source={outIco} />
            <Text
              style={styles.textInputDown}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Salir
            </Text>
          </View>
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
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  logoIco: {
    width: 0.3 * width,
    height: 0.3 * width,
    marginTop: 0.25 * width,
    marginLeft: 0.1 * width,
  },
  up: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconTop: {
    width: 0.09 * width,
    height: 0.09 * width,
    marginLeft: 0.08 * width,
  },
  down: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // justifyContent: 'flex-end'
  },
  iconButton: {
    width: 0.07 * width,
    height: 0.07 * width,
    marginLeft: 0.08 * width,
  },

  textInput: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    marginLeft: 10,
  },
  textInputDown: {
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    marginLeft: 10,
    fontSize: 15,
  },
});
export default Drawer;
