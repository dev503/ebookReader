import React, {useState, useEffect} from 'react';
import * as axios from 'axios';

import {Form, Item, Label, Button, Text, H1, Icon} from 'native-base';
import {StyleSheet, ImageBackground, View, TextInput} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


const fondo = require('../img/CC-Cenpromype-03.png');

/* Obtiene instante de tiempo justo ahora */
const now = new Date();

const Register = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('mujer');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState('');

  /* Cuando sea que password o passwordConfirmation cambien se revisa a ver si coinciden */
  /* Sino coinciden se setea un error */
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
  }, [password, passwordConfirmation]);

  function sendData() {
    const body = {
      username: username,
      name: name,
      password: password,
      gender: selectedGender,
      /* Arma string de fecha DD-MM-YYYY a partir de la fecha seleccionada y del instante de ahora*/
      /* getMonth() tiene +1 porque obtiene los meses a partir de 0 y no de 1 */
      /* Los padStart() les añaden ceros a la izquierda si fueran necesarios */
      registration_date: `${now.getFullYear()}-${(now.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`,
      birthdate: `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${selectedDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
      email: email,
      token: '12345',
    };
    // console.log(body);
    axios
      .post(
        'http://backoffice.moondevsv.com/Backend/public/user/register',
        body,
      )
      .then((res) => {
        navigation.reset({index: 0, routes: [{name: 'Login'}]});
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.image}>
        <View style={{alignItems: 'center'}}>
          <H1 style={styles.h1}> Registrate</H1>
        </View>
        <View style={styles.form}>
          <Form>
            <Item fixedLabel>
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setUsername(value)}
                style={styles.textInput}
                placeholder="Usuario"
                placeholderTextColor="#ffffff"
              />
            </Item>
            <Item fixedLabel>
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setName(value)}
                style={styles.textInput}
                placeholder="Nombre"
                placeholderTextColor="#ffffff"
              />
            </Item>
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
            <Item>
              <View style={styles.container}>
                <Label style={styles.label}>Sexo</Label>
                <Picker
                  selectedValue={selectedGender}
                  style={{
                    height: 40,
                    width: 180,
                    marginHorizontal: 50,
                    color: '#004fb4',
                    fontSize: 15,
                  }}
                
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                  }>
                  <Picker.Item label="Mujer" value="mujer" />
                  <Picker.Item label="Hombre" value="hombre" />
                </Picker>
              </View>
            </Item>
            <Item>
              <View style={{marginTop: 5}}>
                <Label style={styles.label}>Fecha de nacimiento</Label>
                <View style= {{flexDirection: 'row', alignItems: 'center', marginHorizontal: 60}}>
                <Text
                style={{marginTop: 5, color: '#004fb4', marginBottom: 8, marginRight: 50 }}
                  onPress={() => {
                    setShowDatePicker(true);
                  }}>
                  {`${selectedDate.getDate().toString().padStart(2, '0')}-${(
                  selectedDate.getMonth() + 1
                )
                  .toString()
                  .padStart(2, '0')}-${selectedDate.getFullYear()}`}</Text>
                  <Icon name='caret-down' style={{fontSize:12, flexDirection: 'row'}}>

                  </Icon>
                {showDatePicker && (
                  <DateTimePicker
                    onChange={(event, value) => {
                      setShowDatePicker(false);
                      setSelectedDate(value || selectedDate);
                    }}
                    mode="date"
                    value={selectedDate}
                    maximumDate={new Date()}
                  />
                )}
              </View>
              </View>
            </Item>
            <Item fixedLabel>
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setEmail(value)}
                style={styles.textInput}
                placeholder="Correo electrónico"
                placeholderTextColor="#ffffff"
              />
            </Item>
          </Form>
        </View>

        <View>
          <Button rounded onPress={() => sendData()} style={styles.registro}>
            <Text
              style={{
                color: '#f48c1c',
                fontFamily: 'Montserrat-Bold',
                fontSize: 15,
                fontWeight: 'bold',
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
  h1: {
    alignItems: 'center',
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  form: {
    marginHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
  },
  label: {
    fontSize: 15,
    color: '#ffffff',
  },
  textInput: {
    fontSize: 15,

    color: '#004fb4',
  },

  registro: {
    marginHorizontal: 50,
    width: 225,
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#ffffff',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Register;
