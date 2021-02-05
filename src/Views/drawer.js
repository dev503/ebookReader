import React, {useState} from 'react';
import * as axios from 'axios';
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Image,
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

const icono = require('../img/CC-Cenpromype-09.png');
const fondo = require('../img/CC-Cenpromype-04.png');
const perfil = require('../img/CC-Cenpromype-12.png');
const publicacion = require('../img/CC-Cenpromype-13.png');

const Drawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.image}>
        <View style={styles.logoIco}>
          <Thumbnail
            large
            source={icono}
            style={{height: 100, width: 100, marginBottom: 20}}
          />
        </View>
        <View style={styles.text}>
          <Image style={styles.iconitos} source={perfil} />
          <Text style={styles.textInput}>Mi Perfil</Text>
        </View>
        <View style={styles.text}>
          <Image style={styles.iconitos} source={publicacion} />
          <Text style={styles.textInput}>Mis publicaciones</Text>
        </View>

        <View style={styles.down}>
        <View style={styles.text}>
          <Image style={styles.iconitos} source={publicacion} />
          <Text style={styles.textInput}>Mis publicaciones</Text>
        </View>

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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoIco: {
    marginLeft: 50,
  },
  text: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  iconitos: {
    width: 30,
    height: 30,
    marginLeft: 30,
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
