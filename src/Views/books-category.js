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

const logo = require('../img/CC-Cenpromype-25.png');
const menu = require('../img/CC-Cenpromype-17.png');
const fileIco = require('../img/CC-Cenpromype-21.png');
const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const [searchString, setSearchString] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const drawer = useRef(null);

      // A useEffect no le gusta recibir funciones asíncronas como callbacks
    // así que hacemos una función asíncrona dentro...
    const asyncWrapper = async () => {
      console.log("Envio categoria");
      axios
       .post('https://backoffice.moondevsv.com/Backend/public/books/getallcategories', { 
          /* .post('http://localhost/ebookReaderBackend/Backend/public/books/list', { */

          // Aquí obtenemos el token que está almacenado en AsyncStorage
          token: await AsyncStorage.getItem('session_token'),
          email: await AsyncStorage.getItem('session_email'),

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
      // Filter the masterDataSourcew
      // Update FilteredDataSource

      //Filtro por autor
      var newData = masterDataSource.filter(function (item) {
        const itemData = item.author
          ? item.author.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      //Filtro por categoria
     if(newData.length==0){
      newData = masterDataSource.filter(function (item) {
        const itemData = item.categoryName
          ? item.categoryName.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
     }
   
      //Filtro por titulo
     if(newData.length==0){
      newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
     }
     
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
    console.log(item.id)
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
    
      ToastAndroid.showWithGravity(
        res.data.Message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      asyncWrapper();
      
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
            <View style={{flexDirection: 'column',flex:10}}>
              <View style={{flexDirection: 'row'}}>
                <Text Text style={styles.text}>{item.title}</Text> 
                <Text style={styles.category}> {item.categoryName}</Text>
              </View>
              
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
    //navigation.navigate('Dashboard', {name: book.name});
    navigation.reset({index: 0, routes: [{name: 'Dashboard',params: {name: book.name}}]}, {name: book.name});
    
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
      <ScrollView>
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
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:8
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
    width: 0.7 * width,
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
    color: '#616161'
  },
  category:{
    fontSize: 16,
    color:'#007aff',
  },
  author:{
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#616161'
  },
  date:{
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#616161',
    textAlign: 'right',
    marginBottom:0,
    padding:0,
    justifyContent: 'flex-end'
  },
  barra:{
   color:'#007aff',
   marginLeft:5,
   backgroundColor: 'white',
   borderWidth: 0, //no effect
   shadowColor: 'white', //no effect
   borderBottomColor: 'transparent',
   borderTopColor: 'transparent'
  }
});

export default Dashboard;
