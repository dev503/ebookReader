import React, { useState } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Thumbnail,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default Login = ({ navigation }) => {
  const uri =
    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png';
  const [name, setName] = useState('');
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>
        <Grid style={{ alignItems: 'center' }}>
          <Row style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Col style={{ alignItems: 'center' }}>
              <Thumbnail
                large
                source={{ uri: uri }}
                style={{ height: 200, width: 200 }}
              />
              <Text>Epub Reader</Text>
            </Col>
          </Row>
          <Row style={{ flex: 1, flexDirection: 'row' }}>
            <Col>
              <Form>
                <Item inlineLabel>
                  <Label>Usuario</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Item>
                <Item inlineLabel last>
                  <Label>Contraseña</Label>
                  <Input />
                </Item>
                <Button
                  primary
                  full
                  onPress={() => navigation.navigate('Dashboard')}>
                  <Text>Iniciar sesión</Text>
                </Button>
                <Button
                  light
                  full
                  onPress={() => navigation.navigate('Register')}>
                  <Text>Registro</Text>
                </Button>
                <Text onPress={() => navigation.navigate('UpdatePassword')}>
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
