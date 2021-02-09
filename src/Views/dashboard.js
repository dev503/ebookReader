import React, {useState, useEffect, useRef} from 'react';
import { DrawerLayoutAndroid,SafeAreaView, Text, StyleSheet, View, FlatList, Dimensions, Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
import { Header, Left, Right, Button,Thumbnail} from 'native-base';
import * as axios from 'axios';
import Drawer from './drawer';

const logo = require('../img/CC-Cenpromype-10.png');
const menu = require('../img/CC-Cenpromype-17.png');
const fileIco = require('../img/CC-Cenpromype-21.png');
const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [books, setBooks] = useState('');
  const [search, setSearch] = useState('');
  const drawer = useRef(null);

  useEffect(() => {
    axios
      .post('http://backoffice.moondevsv.com/Backend/public/books/list', {
        token: '12345',
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
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

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
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
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Thumbnail square large source={logo} style={styles.logoIco} />
        </View>
        <SafeAreaView style={{flex: 1}}>
          <View>
            <SearchBar
              round
              searchIcon={{size: 24}}
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction('')}
              placeholder="Buscar..."
              value={search}
            />
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          </View>
        </SafeAreaView>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  drawers: {
    flex: 1,
  },
  logoIco: {
    width: 0.6 * width,
    height: 0.6 * width,
  },
  iconTop: {
    width: 0.09 * width,
    height: 0.09 * width,
    marginLeft: 0.08 * width,
  },
});

export default Dashboard;
