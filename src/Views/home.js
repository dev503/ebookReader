import React, {useState} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  View,
  Thumbnail,
  H1,
} from 'native-base';
import {StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  const uri =
    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png';
  return (
    <Container style={{backgroundColor: '#004fb4', justifyContent:'center'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Thumbnail
            large
            source={{uri: uri}}
            style={{height: 130, width: 130}}
          />
        </View>
        <View style={{ alignItems: 'center',  marginTop: 16}}>
          <Text style={styles.baseText}>Biblioteca</Text>
          <Text style={styles.baseText}>
            Centromype
            <Text style={styles.innerText}>App</Text>
          </Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 16}}>
          <Button info onPress={() => navigation.navigate('Login')}>
            <Text>Start</Text>
          </Button>
        </View>
      </View>
   
    </Container>
  );
};
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#ffffff',
  },
  innerText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '400',
  },
});

export default Home;
