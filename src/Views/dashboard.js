import React, { useRef,useState }  from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import * as axios from 'axios';
import {Camiseta} from "../Components/listBooks"

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
  Label,
  ListItem
} from 'native-base';
import Drawer from './drawer';

const Dashboard = ({ navigation }) => {
  const [books, setBooks] = useState('');


  function getBook () {
    axios
      .post(
        'http://backoffice.moondevsv.com/Backend/public/books/list',
        {
          token: '12345'
        },
      )
      .then((res) => {
        setBooks(res.data['data'])
        return res.data['data']
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  function ListOfBooks(){
    var booksito = books

    if (books=="" && booksito.length == 0) {
      return (
        <ListItem>
        <Text style={{fontSize: 23, fontWeight: "bold", flex:3}} >Loading </Text>
        </ListItem>
      )
    } else {
      var tittles = null
      let booksListArray = [] 
      for (let index = 0; index < booksito.length; index++) {
        console.log(booksito[index])
        tittles = <ListItem key={booksito[index]["id"]} onPress={() => navigation.navigate('Reader',{url: booksito[index]["url"]})}>
                    <Text style={{fontSize: 23, fontWeight: "bold", flex:3}} >{booksito[index]["title"]} </Text>
                    <Body>
                      <Label style={{ }}>{booksito[index]["author"]}</Label>
                      <Label style={{ color: '#6c6c6c' }}>{booksito[index]["size"]} </Label>
                    </Body>
                  </ListItem>;
        booksListArray.push(tittles)
      }
      
      return (booksListArray)
    }
   
  }
  if(books==""){
    getBook()
  }
  

  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => {
        return <Drawer navigation={navigation} />;
      }}>
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={() => drawer.current.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
        <List>
         <ListOfBooks />
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