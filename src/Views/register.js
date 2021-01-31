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
} from 'native-base';
import {TextInput} from 'react-native';

const Register = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Nombre</Label>
            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              autoFocus={true}
            />
          </Item>
          <Item stackedLabel>
            <Label>Correo electrónico</Label>
            <Input keyboardType="email-address" autoCorrect={false} />
          </Item>
          <Item stackedLabel>
            <Label>Usuario</Label>
            <Input autoCorrect={false} />
          </Item>
          <Item stackedLabel>
           {/* La vista debe ir aqui */}
          </Item>
          <Item stackedLabel>
            <Label>Contraseña</Label>
            <Input secureTextEntry={true} autoCorrect={false} />
          </Item>
          <Item stackedLabel>
            <Label>Confirmar contraseña</Label>
            <Input secureTextEntry={true} autoCorrect={false} />
          </Item>
          <Button full onPress={() => navigation.navigate('Dashboard')}>
            <Text>Enviar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
