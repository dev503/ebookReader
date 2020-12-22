import React, { Component } from 'react';
// import { Text } from 'react-native';
import {Header, Text, Left, Button, Icon, Right, Body, Title, Drawer, Content,Footer, FooterTab  } from 'native-base'
import SideBar from '../Components/sidebar'
// import HeaderCont from '../Components/header'

// const openDrawer () => {
//    this.drawer._root.open() 
//   };

// render() { 
//   return ( 
//   <Drawer ref={(ref) => { this.drawer = ref; }} 
//   content={
//   <SideBar navigator={
//     this.navigator} />} onClose={() => this.closeDrawer()} >
//        // Main View 
//        </Drawer> ); 
//        } 
//       }


export default class AppHeader extends Component {
  closeDrawer() {
    this.drawer._root.close()
  }
  openDrawer() {
    this.drawer._root.open()
  }
  render() {
    return (
      <Drawer
       ref={(ref) => { this.drawer = ref; }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()}>
        {/* <HeaderCont>
          </HeaderCont> */}
        <Header>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
     
          {/* <Right>
            <Button transparent>
              <Icon name="bulb" />
            </Button>
          </Right> */}
        </Header>

        <Content >
          <Text>
            This is Content Section
          </Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Drawer>
    )
  }
}
module.exports = AppHeader