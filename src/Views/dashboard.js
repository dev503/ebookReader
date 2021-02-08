import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
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
  List,
  Label,
  ListItem,
  Thumbnail,
} from 'native-base';
import Drawer from './drawer';

const logo = require('../img/CC-Cenpromype-10.png');
const menu = require('../img/CC-Cenpromype-17.png');
const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const [books, setBooks] = useState('');

  function getBook() {
    axios
      .post('http://backoffice.moondevsv.com/Backend/public/books/list', {
        token: '12345',
      })
      .then((res) => {
        setBooks(res.data['data']);
        return res.data['data'];
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function ListOfBooks() {
    var booksito = books;

    if (books == '' && booksito.length == 0) {
      return (
        <ListItem>
          <Text style={{fontSize: 23, fontWeight: 'bold', flex: 3}}>
            Loading{' '}
          </Text>
        </ListItem>
      );
    } else {
      var view = null;
      let booksListArray = [];
      for (let index = 0; index < booksito.length; index++) {
        console.log(booksito[index]);
        view = (
          <ListItem
            key={booksito[index]['id']}
            onPress={() =>
              navigation.navigate('Reader', {url: booksito[index]['url']})
            }>
            <Text style={{fontSize: 23, fontWeight: 'bold', flex: 3}}>
              {booksito[index]['title']}{' '}
            </Text>
            <Body>
              <Label style={{}}>{booksito[index]['author']}</Label>
              <Label style={{color: '#6c6c6c'}}>
                {booksito[index]['size']}{' '}
              </Label>
            </Body>
          </ListItem>
        );
        booksListArray.push(view);
      }

      return booksListArray;
    }
  }
  if (books == '') {
    getBook();
  }

  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      style={styles.drawers}
      drawerPosition="right"
      renderNavigationView={() => {
        return <Drawer navigation={navigation} />;
      }}>
      <Header transparent>
        <Left></Left>

        <Right>
          <Button transparent onPress={() => drawer.current.openDrawer()}>
            {/* <Icon  name="menu" /> */}
            <Image source={menu} style={{width: 50, height: 50}}></Image>
          </Button>
        </Right>
      </Header>
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
          <Thumbnail
            square
            large
            source={logo}
            style={styles.logoIco}
          />
        </View>
        <View>
          <List>
            <ListOfBooks />
          </List>
          {/* <Text>This is Content Section</Text> */}
          {/* <Button onPress={() => navigation.navigate('Reader')}>
              <Text>Show reader</Text>
            </Button> */}
        </View>
      </View>

      {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
    </DrawerLayoutAndroid>
  );
};
const styles = StyleSheet.create({
  drawers: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  logoIco: {
    width: 0.6 * width,
    height: 0.6 * width,
   
    },
});
export default Dashboard;
