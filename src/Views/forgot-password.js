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
  Form,
  Item,
  Label,
  Button,
  Text,
  Thumbnail,
  Header,
  Left,
  Right,
} from 'native-base';
const {width} = Dimensions.get('window');
const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');
const flecha = require('../img/CC-Cenpromype-19.png');

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  function sendData() {
    console.log(email);
    axios
      .post(
        'http://backoffice.moondevsv.com/Backend/public/user/forgotPassword',
        {
          // email: email,
          email: 'mauricio25luna@gmail.com', //comentar esta linea y descomentar la anterior
          token: '12345',
        },
      )
      .then((res) => {
        navigation.reset({index: 0, routes: [{name: 'NewPassword'}]});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <View style={styles.container}>
      <Header style={{backgroundColor: '#f48c1c'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Login')}>
            <Image source={flecha} style={{width: 50, height: 50}}></Image>
          </Button>
        </Left>

        <Right></Right>
      </Header>
      <ImageBackground source={fondo} style={styles.background}>
        <View style={styles.logoIco}>
          <Thumbnail square large source={logo} style={styles.logoIco} />
        </View>
        <View style={styles.form}>
          <Form>
            <Item style={styles.items} fixedLabel>
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setEmail(value)}
                placeholder="Correo electrónico"
                placeholderTextColor="#ffffff"
                style={styles.text}
              />
            </Item>
          </Form>
        </View>
        <View style={styles.btncontainer}>
          {/* onPress={() => sendData()}  Onpress correcto*/}
          <Button
            rounded
            style={[styles.button, {backgroundColor: '#fff'}]}
            onPress={() => navigation.navigate('NewPassword')}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
                color: '#f48c1c',
              }}>
              Enviar correo
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
    height: 0.6 * width,
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
  form: {
    paddingHorizontal: 0.08 * width,
    width: width,
    marginBottom: 26,
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

export default ForgotPassword;
