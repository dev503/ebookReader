import React, {useState} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Thumbnail,
  H1,
} from 'native-base';
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const logo = require('../img/CC-Cenpromype-06.png');
const fondo = require('../img/CC-Cenpromype-03.png');

const Register = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <ImageBackground source={fondo} style={styles.image}>
        <View style={styles.logoIco}>
          <H1> Registrate</H1>
       
        </View>
        <View style={styles.form}>
          <Form>
            <Item fixedLabel>
              {/* <Label style={styles.label}>Correo electrónico</Label> */}
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setUsername(value)}
                style={styles.textInput}
                placeholder="Usuario"
                placeholderTextColor = "#ffffff"
              />
            </Item>
            <Item fixedLabel>
              {/* <Label style={styles.label}>Correo electrónico</Label> */}
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setUsername(value)}
                style={styles.textInput}
                placeholder="Nombre"
                placeholderTextColor = "#ffffff"
              />
            </Item>
            <Item fixedLabel>
              {/* <Label style={styles.label}>Contraseña</Label> */}
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
                placeholder="Contraseña"
                placeholderTextColor = "#ffffff"
              />
            </Item>
            <Item fixedLabel>
              {/* <Label style={styles.label}>Confirmar contraseña</Label> */}
              <TextInput
                secureTextEntry={true}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
                placeholder="Confirmar contraseña"
                placeholderTextColor = "#ffffff"
              />
            </Item>
            <Item>
              <View style={styles.container}>
              <Label>Sexo</Label>
                <Picker
                  selectedValue={selectedValue}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="Mujer" value="mujer" />
                  <Picker.Item label="Hombre" value="hombre" />
                </Picker>
              </View>
            </Item>
            <Item>
              <View>
              <Label>Fecha de nacimiento</Label>
                <Text onPress={() => {setShowDatePicker(true)}}>{`${selectedDate.getDate().toString().padStart(2, '0')}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getFullYear()}`}</Text>
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
            </Item>
            <Item fixedLabel>
              {/* <Label style={styles.label}>Correo electrónico</Label> */}
              <TextInput
                autoCorrect={false}
                onChangeText={(value) => setUsername(value)}
                style={styles.textInput}
                placeholder="Correo electrónico"
                placeholderTextColor = "#ffffff"
              />
            </Item>
          </Form>
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
              Enviar
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
    // <Container>
    //   <Content>
    //     <Form>
    //       <Item stackedLabel>
    //         <Label>Nombre</Label>
    //         <TextInput
    //           autoCapitalize="words"
    //           autoCorrect={false}
    //           autoFocus={true}
    //         />
    //       </Item>
    //       <Item stackedLabel>
    //         <Label>Correo electrónico</Label>
    //         <Input keyboardType="email-address" autoCorrect={false} />
    //       </Item>
    //       <Item stackedLabel>
    //         <Label>Usuario</Label>
    //         <Input autoCorrect={false} />
    //       </Item>
    //       <Item stackedLabel>
    //        {/* La vista debe ir aqui */}
    //       </Item>
    //       <Item stackedLabel>
    //         <Label>Contraseña</Label>
    //         <Input secureTextEntry={true} autoCorrect={false} />
    //       </Item>
    //       <Item stackedLabel>
    //         <Label>Confirmar contraseña</Label>
    //         <Input secureTextEntry={true} autoCorrect={false} />
    //       </Item>
    //       <Button full onPress={() => navigation.navigate('Dashboard')}>
    //         <Text>Enviar</Text>
    //       </Button>
    //     </Form>
    //   </Content>
    // </Container>
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
    color: '#0454b4',
    fontWeight: 'bold',
  },
 
  registro: {
    marginHorizontal: 50,
    width: 225,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
});
export default Register;
