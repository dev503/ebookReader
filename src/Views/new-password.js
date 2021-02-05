import React, {useState} from 'react';
import * as axios from 'axios';
import {StyleSheet, ImageBackground, View, TextInput} from 'react-native';
import {Form, Item, Button, Text, Thumbnail, Label} from 'native-base';

const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');

const NewPassword = ({navigation}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.image}>
        <View style={styles.logoIco}>
          <Thumbnail
            square
            large
            source={logo}
            style={{height: 190, width: 210, marginBottom: 10}}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 10}}>
        <Label style={styles.label}>Código de confirmación</Label>
        <Item regular style={{width: 170}}>
              <TextInput
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(value) => setCode(value)}
                style={styles.box}
                placeholder="00000"
                placeholderTextColor="#ffffff"
                maxLength={5}
              />
            </Item>
        </View>
        <View style={styles.form}>
         
          <Form>
           
            <Item fixedLabel>
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
                
                placeholder="Contraseña"
                placeholderTextColor="#ffffff"
              />
            </Item>
            <Item fixedLabel>
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPasswordConfirmation(value)}
                style={styles.textInput}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#ffffff"
              />
            </Item>
          </Form>
        </View>
        <View>
          {/* <Button rounded onPress={() => sendData()} style={styles.enviar}>  descomentar esta linea y borrar otra*/}
          <Button
            rounded
            style={styles.enviar}
            onPress={() => navigation.navigate('NewPassword')}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
                color: '#f48c1c',
              }}>
              Cambiar contraseña
            </Text>
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
    justifyContent: 'center',
  },
  logoIco: {
    alignItems: 'center',
  },
  form: {
    marginHorizontal: 15
    
  },
  label: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
  },
  enviar: {
    marginHorizontal: 50,
    width: 225,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  box: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
    
    marginHorizontal: 50,
    justifyContent: 'center',
  },
});
export default NewPassword;
