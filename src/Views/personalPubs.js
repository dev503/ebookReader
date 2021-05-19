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
  ScrollView,
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

const PersonalPubs = ({navigation}) => {
  const [searchString, setSearchString] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const drawer = useRef(null);

  const asyncWrapper = async () => {
    axios
      .post('http://backoffice.moondevsv.com/Backend/public/books/favList', {
        // Aquí obtenemos el token que está almacenado en AsyncStorage
        token: await AsyncStorage.getItem('session_token'),
        emailUser: await AsyncStorage.getItem('session_email'),
      })
      .then((res) => {
        const booksList = res.data.data;

        console.log(booksList);
        setMasterDataSource(booksList);
        setFilteredDataSource(booksList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
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

  const setFav = async (item) => {
    console.log(item)
    console.log("Este es el item")
   axios
    .post('http://backoffice.moondevsv.com/Backend/public/books/favorite', {
      // Aquí obtenemos el token que está almacenado en AsyncStorage
      token: await AsyncStorage.getItem('session_token'),
      emailUser: await AsyncStorage.getItem('session_email'),
      idBook: item.id
    })
    .then((res) => {
    console.log(res.data.Message)
    asyncWrapper()
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
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
         
          <TouchableOpacity
          style={{flex:1}}
          onPress={() => {
            goToReader(item);
          }}
          style={styles.itemStyle}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.iconTop} source={{uri: item.pic_url,}} />
          
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
             
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
           //style={{ width:}}
            onPress={() => {
              setFav(item);
            }}
            style={{width:35,flexDirection: 'row', alignItems: 'center',marginLeft:5,flex:1}}
            >
              
              <Icon name='heart' style={{ color: '#000',marginLeft : 1}}/>
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
      drawerPosition="left"
      renderNavigationView={() => {
        return <Drawer navigation={navigation} />;
      }}>
      <Header transparent>
        <Left>
        <Button transparent onPress={() => drawer.current.openDrawer()}>
            {/* <Icon  name="menu" /> */}
            <Image source={menu} style={{width: 50, height: 50}}></Image>
        </Button>
        </Left>

        <Right>
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
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            placeholderTextColor={'#g5g5g5'}
            inputContainerStyle={{backgroundColor: 'white'}}
            borderWidth={0}
            value={searchString}
            style={styles.barra}
            containerStyle={{
              backgroundColor:"#FBFBFB",
              borderBottomColor: 'transparent',
              borderTopColor: 'transparent'
          }}
          />
          <ScrollView>
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          </ScrollView>
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
    flex:8
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
    marginRight: 10
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

export default PersonalPubs;
