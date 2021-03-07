// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect, useRef} from 'react';
import * as axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  DrawerLayoutAndroid,
  Image,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Header, Left, Right, Button, Thumbnail, Icon} from 'native-base';
import Drawer from './drawer';

const logo = require('../img/CC-Cenpromype-10.png');
const menu = require('../img/CC-Cenpromype-17.png');
const fileIco = require('../img/CC-Cenpromype-21.png');
const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const [searchString, setSearchString] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const drawer = useRef(null);

  useEffect(() => {
    // A useEffect no le gusta recibir funciones asíncronas como callbacks
    // así que hacemos una función asíncrona dentro...
    const asyncWrapper = async () => {
      axios
        .post('http://backoffice.moondevsv.com/Backend/public/books/list', {
          // Aquí obtenemos el token que está almacenado en AsyncStorage
          token: await AsyncStorage.getItem('session_token'),
        })
        .then((res) => {
          const booksList = res.data.data;

          console.log(booksList);
          setMasterDataSource(booksList);
          setFilteredDataSource(booksList);
        })
        .catch((err) => console.log(err));
    };

    // ... y la llamamos inmediatamente
    // eso es para poder usar el await del AsyncStorage
    asyncWrapper();
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchString(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearchString(text);
    }
  };

  const setFav = async ({item}) => {
    console.log(item)
    console.log("Este es el item")
   axios
    .post('http://backoffice.moondevsv.com/Backend/public/books/favorite', {
      // Aquí obtenemos el token que está almacenado en AsyncStorage
      token: await AsyncStorage.getItem('session_token'),
      emailUser: await AsyncStorage.getItem('session_email'),
      idBook: 1
    })
    .then((res) => {
    console.log(res.data.Message)
      ToastAndroid.showWithGravity(
        res.data.Message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      
    })
    .catch((err) => {
      console.error(err);
      ToastAndroid.showWithGravity(
        res.data.Message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    });
  }

  const ItemView = ({item}) => {
   
    return (
        <View>
           <TouchableOpacity
           //style={{ width:}}
            onPress={() => {
              setFav(item);
            }}
            style={{width:35}}
            >
              <Icon name='heart' style={{ iconColor: '#000',color: '#000',marginLeft : 1}}/>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={() => {
            goToReader(item);
          }}
          style={styles.itemStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.iconTop} source={fileIco} />
          
            <Text style={styles.text}>{item.title}</Text>
            <View style={{flex: 1}}>
            
              {/* <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'right',
                  alignSelf: 'stretch',
                }}>
                {item.author}
              </Text> */}
              <Text style={{textAlign: 'right', alignSelf: 'stretch'}}>
                {item.size}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const goToReader = (book) => {
    navigation.navigate('Reader', {url: book.url});
  };

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
      <View style={{alignItems: 'center'}}>
        <Thumbnail square large source={logo} style={styles.logoIco} />
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <SearchBar
            round
            searchIcon={{size: 24}}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Buscar..."
            value={searchString}
            style={styles.barra}
          />
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  itemStyle: {
    padding: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
  },
  drawers: {
    flex: 1,
  },
  logoIco: {
    width: 0.6 * width,
    height: 0.6 * width,
    marginBottom: 16
  },
  iconTop: {
    width: 0.09 * width,
    height: 0.09 * width,
    
  },
  text:{
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#000000'
  },
  barra:{
   
  }
});

export default Dashboard;
