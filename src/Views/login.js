import React, {useState} from 'react';
import * as axios from 'axios';
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import {Form, Item, Label, Button, Text, Thumbnail} from 'native-base';

const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');
const {width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Función para mandar datos del login
  function sendDataLogin() {
    console.log(username, password);
    axios
      .post('http://backoffice.moondevsv.com/Backend/public/user/search', {
        email: username,
        password: password,
        // email: 'mauricio25luna@gmail.com',
        // password: '12345',
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
      <ImageBackground source={fondo} style={styles.background}>
        <View>
          <Thumbnail square large source={logo} style={styles.logoIco} />
        </View>
        <View style={styles.form}>
            <Item style={styles.items} fixedLabel>
              
              <TextInput
                autoCorrect={false}
                // autoFocus={true}
                onChangeText={(value) => setUsername(value)}
                placeholder="Correo/Usuario"
                placeholderTextColor="#ffffff"
                style= {styles.text}
              />
            </Item>
            <Item fixedLabel style={styles.items}>
           
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                placeholder="Contraseña"
                placeholderTextColor="#ffffff"
                style= {styles.text}
              />
            </Item>
            <Text
              onPress={() => navigation.navigate('ForgotPassword')}
              style={[styles.items, {marginTop: 16}]}>
              ¿Olvidó su contraseña?
            </Text>
        </View>
          <View  style={styles.btncontainer}>
            <Button rounded onPress={() => sendDataLogin()} style={styles.button}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                Iniciar sesión
              </Text>
            </Button>
            <Button
              rounded
              
              onPress={() => navigation.navigate('Register')}
              style={[styles.button, {backgroundColor: '#fff'}]}>
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
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoIco: {
  width: 0.6 * width,
  height: 0.6 * width
  },
  items: {
   textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
    fontWeight: 'bold',
  },
  text:{
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
    
  },
  form: {
    paddingHorizontal: 0.08 * width,
    width: width,
    marginBottom: 16
  },
  button:{
    alignSelf: 'stretch',
    marginBottom: 16,
    justifyContent: 'center'
  },
  btncontainer:{
    width: width,
    paddingHorizontal:  0.09 * width,

 
},
});
export default Login;
