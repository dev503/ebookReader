import React, { useRef } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import {
  Container,
  Content,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem
} from 'native-base';
import Drawer from './drawer';

const Dashboard = ({ navigation }) => {
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => {
        return <Drawer navigation={navigation} />;
      }}>
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => drawer.current.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
        <List>
            <ListItem  onPress={() => navigation.navigate('Reader')}>
              <Text>Los Perros de la Guerra</Text>
            </ListItem>
            <ListItem  onPress={() => navigation.navigate('Reader')}>
              <Text>Entre Sonrisas y risas v2</Text>
            </ListItem>
            <ListItem  onPress={() => navigation.navigate('Reader')}>
              <Text>The Princes Saves Herself in This One</Text>
            </ListItem>
          </List>
          {/* <Text>This is Content Section</Text> */}
          {/* <Button onPress={() => navigation.navigate('Reader')}>
            <Text>Show reader</Text>
          </Button> */}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </DrawerLayoutAndroid>
  );
};

export default Dashboard;
