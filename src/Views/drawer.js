import React from 'react';

import { Text, List, ListItem } from 'native-base';

const Drawer = ({ navigation }) => {
  return (
    <List button>
      <ListItem full button>
        <Text style={{ fontSize: 18, color: 'black' }}>Libros</Text>
      </ListItem>
      <ListItem>
        <Text style={{ fontSize: 18, color: 'black' }}>Extra</Text>
      </ListItem>
      <ListItem
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={{ fontSize: 18, color: 'black' }}>Cerrar sesión</Text>
      </ListItem>
    </List>
  );
};

export default Drawer;
