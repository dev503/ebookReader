import React, {useState} from 'react';
import * as axios from 'axios';
import {StyleSheet, ImageBackground, View, TextInput} from 'react-native';
import {Form, Item, Label, Button, Text, Thumbnail} from 'native-base';

const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Función para mandar datos del login
  function sendDataLogin() {
    console.log(username, password);
    axios
      .post('http://backoffice.moondevsv.com/Backend/public/user/search', {
        // email: username,
        // password: password,
        email: 'mauricio25luna@gmail.com',
        password: '12345',
        token: '12345',
      })
      .then((res) => {
        navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
      })
      .catch((err) => {
        console.error(err);
        
      });
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.image}>
        <View style={styles.logoIco}>
          <Thumbnail
            square
            large
            source={logo}
            style={{height: 180, width: 200, marginBottom: 8}}
          />
        </View>
        <View style={styles.form}>
          <Form>
            <Item stackedLabel>
              <Label style={styles.label}>Correo electrónico</Label>
              <TextInput
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(value) => setUsername(value)}
                style={styles.textInput}
              />
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Contraseña</Label>
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
              />
            </Item>
            <Text
              onPress={() => navigation.navigate('ForgotPassword')}
              style={styles.fogotpass}>
              ¿Olvidó su contraseña?
            </Text>
          </Form>
        </View>
        <View>
          <Button rounded onPress={() => sendDataLogin()} style={styles.inicio}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Iniciar sesión
            </Text>
          </Button>
        </View>
        <View>
          <Button
            rounded
            onPress={() => navigation.navigate('Register')}
            style={styles.registro}>
            <Text
              style={{
                color: '#f48c1c',
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Registro
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
    marginHorizontal: 20,
  },
  label: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
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
export default Login;
