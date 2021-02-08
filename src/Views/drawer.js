import React, {useState} from 'react';
import * as axios from 'axios';
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {
  Text,
  List,
  ListItem,
  Form,
  Item,
  Label,
  Button,
  Thumbnail,
} from 'native-base';
const {width} = Dimensions.get('window');
const image = require('../img/CC-Cenpromype-09.png');
const fondo = require('../img/CC-Cenpromype-04.png');
const personIco = require('../img/CC-Cenpromype-12.png');
const fileIco = require('../img/CC-Cenpromype-13.png');

const Drawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.background}>
        <View >
          <Thumbnail
            large
            source={image}
            style={styles.logoIco}
          />
        </View>
        <View style={styles.up}>
          <View style={styles.text}>
            <Image style={styles.iconTop} source={personIco} />
            <Text style={styles.textInput}>Mi Perfil</Text>
          </View>
          <View style={styles.text}>
            <Image style={styles.iconTop} source={fileIco} />
            <Text style={styles.textInput}>Mis publicaciones</Text>
          </View>
        </View>

        <View style={styles.down}>
        

          <List button>
            <ListItem full button>
             
            </ListItem>
            <ListItem>
              
            </ListItem>
            <ListItem
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>Cerrar sesión</Text>
            </ListItem>
          </List>
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
    alignItems: 'flex-start',
    
  },
  logoIco: {
    width: 0.3 * width,
    height: 0.3 * width,
    marginTop: 0.25 * width,
    marginLeft: 0.1 * width
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTop: {
    width: 0.09 * width,
    height: 0.09 * width,
    marginLeft: 0.08 * width
  },

  label: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    marginLeft: 10,
  },
  fogotpass: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    margin: 10,
    alignItems: 'center',
    marginHorizontal: 60,
    color: '#004fb4',
    fontWeight: 'bold',
  },
  inicio: {
    marginHorizontal: 50,
    width: 225,
    justifyContent: 'center',
    marginBottom: 10,
  },
  registro: {
    marginHorizontal: 50,
    width: 225,
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
});
export default Drawer;
