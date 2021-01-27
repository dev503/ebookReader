import React, {useState} from 'react';
import * as axios from 'axios';
import {TextInput} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Thumbnail,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Función para mandar datos del login
  function sendDataLogin() {
    console.log(username, password);
    axios
      .post(
        'http://backoffice.moondevsv.com/Backend/public/user/search',
        {
          email: 'username',
          password: 'password',
          token: '12345',
        },
      )
      .then((res) => {
        navigation.reset({index:0, routes:[{name: 'Dashboard'}]});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const uri =
    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png';
  // const [name, setName] = useState('');
  return (
    <Container>
      <Content contentContainerStyle={{flex: 1}} style={{padding: 10}}>
        <Grid style={{alignItems: 'center'}}>
          <Row style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Col style={{alignItems: 'center'}}>
              <Thumbnail
                large
                source={{uri: uri}}
                style={{height: 200, width: 200}}
              />
              <Text>Epub Reader</Text>
            </Col>
          </Row>
          <Row style={{flex: 1, flexDirection: 'row'}}>
            <Col>
              <Form>
                <Item inlineLabel>
                  <Label>Email</Label>
                  <TextInput
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </Item>
                <Item inlineLabel last>
                  <Label>Contraseña</Label>
                  <TextInput secureTextEntry={true} value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Item>
                <Button primary full onPress={() => sendDataLogin()}>
                  <Text>Iniciar sesión</Text>
                </Button>
                <Button
                  light
                  full
                  onPress={() => navigation.navigate('Register')}>
                  <Text>Registro</Text>
                </Button>
                <Text onPress={() => navigation.navigate('ForgotPassword')}>
                  Olvidé mi contraseña
                </Text>
              </Form>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};
export default Login;
