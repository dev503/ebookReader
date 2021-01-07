import React from 'react';
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

const ForgotPassword = ({navigation}) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Correo electrónico</Label>
            <Input keyboardType="email-address" autoCorrect={false} />
          </Item>
          <Button full onPress={() => navigation.navigate('Dashboard')}>
            <Text>Enviar</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
