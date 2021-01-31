import React, { useRef } from 'react';
import { DrawerLayoutAndroid,FlatList,SafeAreaView,View } from 'react-native';
import * as axios from 'axios';

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
} from 'native-base';
import Drawer from './drawer';
var Data2;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View >
    <Text>{title}</Text>
  </View>
);
  // Función para mandar datos del login
  const getBooks = () => {
    axios
      .post(
        'http://backoffice.moondevsv.com/Backend/public/books/list',
        {
          token: '12345'
        },
      )
      .then((res) => {
       // console.log(res.data)
        //Data2 = res.data
       // return res.data;
        //totalData = res.data
        /*res.data.forEach(element => {
          
        });*/
        //return res.data
        //return res
        console.log("-----------------------------------------")
      // var  data = JSON.parse(res.data) 
        console.log(res.data['data'][0]["title"])
        return res.data['data']
      })
      .catch((err) => {
        console.error(err);
      });
  }


  

  const Dashboard = ({ navigation }) => {

    const renderItem = ({ item }) => (
      <Item title={item["title"]} />
    );
    //const Data2 = getBooks()
  
  return (
    <DrawerLayoutAndroid
      ref={Drawer}
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
          {/* <Text>This is Content Section</Text> */}
          <Button onPress={() => navigation.navigate('Reader')}>
            <Text>Show reader</Text>
          </Button>
          <SafeAreaView>
            <FlatList 
              data={getBooks()}
              renderItem={renderItem}
              keyExtractor={item => item["id"]}
              />
          </SafeAreaView>
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
