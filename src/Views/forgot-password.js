
import React, {useState} from 'react';
import * as axios from 'axios';
import {StyleSheet, ImageBackground, View, TextInput, Image} from 'react-native';
import {Form, Item, Label, Button, Text, Thumbnail, Header, Left, Right} from 'native-base';

const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');
const flecha = require('../img/CC-Cenpromype-19.png');

const ForgotPassword = ({navigation}) => {

  const [email, setEmail] = useState('');

  function sendData() {

    console.log(email);
    axios
      .post('http://backoffice.moondevsv.com/Backend/public/user/forgotPassword', {
        // email: email,
        email: 'mauricio25luna@gmail.com',
        token: '12345', 
      })
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
             <Image source={flecha} style={{width: 40, height: 40}}></Image>
            </Button>
          </Left>
         
          <Right>
          
          </Right>
        </Header>
      <ImageBackground source={fondo} style={styles.image}>
        <View style={styles.logoIco}>
          <Thumbnail
            square
            large
            source={logo}
            style={{height: 210, width: 240, marginBottom: 20 }}
          />
        </View>
        <View style={styles.form}>
          <Form>
            <Item stackedLabel>
              <Label style={styles.label}>Correo electrónico</Label>
              <TextInput
                autoCorrect={false}
                autoFocus={true}
                onChangeText={(value) => setEmail(value)}
                style={styles.textInput}
              />
            </Item>
          </Form>
        </View>
        <View>
          <Button rounded onPress={() => sendData()} style={styles.enviar}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
                color: '#f48c1c',
              }}>
              Enviar
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
  enviar: {
    marginHorizontal: 50,
    width: 225,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
    
  },

});

export default ForgotPassword;
