import React, {useState, useEffect} from 'react';
import * as axios from 'axios';

import {Form, Item, Label, Button, Text, H1, Icon, Header, Left, Right} from 'native-base';
import {StyleSheet, ImageBackground, View, TextInput, Image, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const fondo = require('../img/CC-Cenpromype-03.png');
const flecha = require('../img/CC-Cenpromype-19.png');
const {width} = Dimensions.get('window');

/* Obtiene instante de tiempo justo ahora */
const now = new Date();

const Register = ({navigation}) => {
  const names='';
  const asyncWrapper = async () => {
    setName(await AsyncStorage.getItem('session_name'))
    setSelectedDate(new Date(await AsyncStorage.getItem('session_birthday')))
    setSelectedGender(await AsyncStorage.getItem('session_gender'))
  };
  
  const [selectedGender, setSelectedGender] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState(names);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState('');

  /* Cuando sea que password o passwordConfirmation cambien se revisa a ver si coinciden */
  /* Sino coinciden se setea un error */
  useEffect(() => {
    asyncWrapper();
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

 

 

  const sendData = async () => {

    const body = {
     
      name: name,
      email: await AsyncStorage.getItem('session_email'),
      gender: selectedGender,
      /* Arma string de fecha DD-MM-YYYY a partir de la fecha seleccionada y del instante de ahora*/
      /* getMonth() tiene +1 porque obtiene los meses a partir de 0 y no de 1 */
      /* Los padStart() les añaden ceros a la izquierda si fueran necesarios */
      
      birthdate: `${selectedDate.getFullYear()}-${(selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${selectedDate
        .getDate()
        .toString()
        .padStart(2, '0')}`,
      token: '12345',
    };

    axios
    .post(
      'http://backoffice.moondevsv.com/Backend/public/user/modifyUser',
      body,
    )
    .then((res) => {
      navigation.reset({index: 0, routes: [{name: 'Dashboard'}]});
    })
    .catch((err) => {
      console.error(err);
    });
  };

  



  return (
    <View style={styles.container}>
    <Header style={{backgroundColor: '#f48c1c',height:100}}>
          <Left>
            <Button transparent onPress={() => navigation.navigate('Dashboard')}>
             <Image source={flecha} style={{width: 50, height: 50, marginTop:50}}></Image>
            </Button>
          </Left>
         
          <Right>
          
          </Right>
        </Header>
      <ImageBackground source={fondo} style={styles.background}>
        <View style={{alignItems: 'center',}}>
          <H1 style={styles.h1}> Mi perfil </H1>
        </View>
        <View style={styles.form}>
        
            
            <Item fixedLabel style={styles.items}>
              <TextInput
                autoCorrect={false}
                value={name}
                onChangeText={(value) => setName(value)}
                style={styles.textInput}
                placeholder="Nombre"
                placeholderTextColor="#ffffff"
              />
            </Item>
            
            <Item fixedLabel style={styles.items}>
                <Label style={styles.label}>Genero</Label>
                <Picker
                  selectedValue={selectedGender}
                  style={{
                    height: 40,
                    marginHorizontal: 0,
                    color: '#fff',
                    fontSize: 15,
                    flex: 0.8
                  }}
                
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                  }>
                  <Picker.Item label="Masculino" value="masculino" />
                  <Picker.Item label="Femenino" value="femenino" />
                  <Picker.Item label="Otro" value="otro" />

                </Picker>
              
            </Item>
            <Item fixedLabel style={styles.items} style={{marginTop: 5}}>
            <Label style={styles.label}>Fecha de nacimiento</Label>

              <View >
                <Label style={{}}>Fecha de nacimiento</Label>
                <View >
                <Text
                style={styles.label}
                style={{
                  height:35,
                  marginTop:15,
                  color: '#ffffff',
                }}
                  onPress={() => {
                    setShowDatePicker(true);
                  }}>
                  {`${selectedDate.getDate().toString().padStart(2, '0')}-${(
                  selectedDate.getMonth() + 1
                )
                  .toString()
                  .padStart(2, '0')}-${selectedDate.getFullYear()}`}</Text>
              
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
           
          
        </View>

        <View style={styles.btncontainer}>
          <Button rounded onPress={() => sendData()} style={styles.button}>
            <Text
              style={{
                color: '#f48c1c',
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Actualizar datos
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
  button:{
    alignSelf: 'stretch',
    marginTop: 16,
    width: width-50,
    justifyContent: 'center', 
    backgroundColor: '#fff'
  },
  btncontainer:{
 flex:2,
    paddingHorizontal:  0.09 * width,
    marginTop: 16,
},
  h1: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 16
  },
  form: {
    paddingVertical: 100,
    paddingHorizontal: 0.09 * width,
    width: width,
    flex:3
  },
  items: {
    textAlign: 'center',
     fontSize: 28,
     fontFamily: 'Montserrat-Bold',
     color: '#004fb4',
     fontWeight: 'bold',
     marginTop: 5,
     

   },
 
 label: {
     fontSize: 18,
     color: '#ffffff',
     flex: 1
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 5
  },

  error: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Register;