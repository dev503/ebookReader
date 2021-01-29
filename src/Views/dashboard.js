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
            <ListItem  onPress={() => navigation.navigate('Reader',{url: 'http://backoffice.moondevsv.com/Reader/index.php?idbook=1&fbclid=IwAR1pABWchF4ylWzouW9Nz-0kL_km-k9F-E47xFi6MAgub2WxLh7EB4f43p0'})}>
              <Text>Los Perros de la Guerra</Text>
            </ListItem>
            <ListItem  onPress={() => navigation.navigate('Reader', {url: 'http://backoffice.moondevsv.com/Reader/index.php?idbook=2&fbclid=IwAR14N2BELBenLnTPOlBAcWwFeoVL6lMUvWWfWcUFfgTnULhNVMaKtWo8KVE'})}>
              <Text>Entre Sonrisas y risas v2</Text>
            </ListItem>
            <ListItem  onPress={() => navigation.navigate('Reader',{url: 'http://backoffice.moondevsv.com/Reader/index.php?idbook=3&fbclid=IwAR1mcutWWqe0zl7oSdaczf7207dbNNuvxpxiAW4tfMLG28baYtjiiEuSZ4o'})}>
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
