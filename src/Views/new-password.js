import React, {useState, useEffect} from 'react';
import * as axios from 'axios';
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Dimensions,
  Text,
  ToastAndroid,
} from 'react-native';
import {Item, Button, Thumbnail} from 'native-base';

const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');
const {width} = Dimensions.get('window');

const NewPassword = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const {email} = route.params || {};
  const [error, setError] = useState('');
  console.log("Este es el email " +route.params.email);

  useEffect(() => {
    if (password !== passwordConfirmation) {
      if (error === '') {
        setError('Contraseñas no coinciden');
      }
    } else {
      if (error !== '') {
        setError('');
      }
    }
  }, [passwordConfirmation]);

  function sendData() {
    axios
      .post(
        'http://backoffice.moondevsv.com/Backend/public/user/ChangePassword',
        {
          new_password: password,
          code: code,
          token: '12345',
          mail: route.params.email,
        },
      )
      .then((res) => {
        ToastAndroid.showWithGravity(
          "Contraseña actualizada",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.reset({index: 0, routes: [{name: 'Login'}]});
      })
      .catch((err) => {
        let responsedata =""
        console.error(err);
        if (err.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          responsedata = JSON.stringify(err.response.data)
          responsedata = err.response.data.Message

          //responsedata = responsedata.message
          console.log(err.response.data);
          //console.log(err.response.status);
          //console.log(err.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
         // console.log('Error', err.message);
          responsedata = err.message

        }

        console.log(responsedata)

        ToastAndroid.showWithGravity(
          responsedata,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      });
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.background}>
        <View>
          <Thumbnail square large source={logo} style={styles.logoIco} />
        </View>
        <View style={styles.form}>
          {error.trim() != '' && <Text style={styles.error}>{error}</Text>}
          
            <Text style={[styles.items, {marginTop: 16, marginBottom: 5}]}>
              Código de confirmación
            </Text>
           
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setCode(value)}
                placeholder="00000"
                placeholderTextColor="#ffffff"
                maxLength={5}
                style={[styles.text, {borderColor: '#ffffff', borderWidth: 1, textAlign: 'center', marginBottom: 16}]}
              />
            
            <Item style={styles.items} fixedLabel>
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                style={styles.text}
                placeholder="Contraseña"
                placeholderTextColor="#ffffff"
              />
            </Item>
           
          
        </View>
        <View style={styles.btncontainer}>
          <Button
            rounded
            style={[styles.button, {backgroundColor: '#fff'}]}
            onPress={ () => sendData()  }>
            {/* onPress={() => sendData()}> */}
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
                color: '#f48c1c',
              }}>
              CAMBIAR CONTRASEÑA
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
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
    width: 0.7 * width,
    height: 0.7 * width,
  },
  form: {
    paddingHorizontal: 0.09 * width,
    width: width,
    marginBottom: 16,
  },
  items: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#004fb4',
  },
  btncontainer: {
    width: width,
    paddingHorizontal: 0.09 * width,
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 28,
    justifyContent: 'center',
  },
});
export default NewPassword;
