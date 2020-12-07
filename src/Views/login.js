import React, { useState } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default Login = ({ navigation }) => {

  const [name, setName] = useState("")
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item inlineLabel>
            <Label>Username</Label>
            <Input value={name} onChange={e => setName(e.target.value)} />
          </Item>
          <Item inlineLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Button primary full
            onPress={() =>
              navigation.navigate('Dashboard', { nombre: name })
            }
          >
            <Text> Sign In </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}