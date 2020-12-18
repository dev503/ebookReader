import React, { Component } from 'react'
import { Text } from 'react-native'
import { Header, Left, Button, Icon, Right, Body, Title, Drawer, Content,Footer, FooterTab  } from 'native-base'
import SideBar from './sidebar'

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
        onClose={() => this.closeDrawer()}
  
      >
        <Header>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
     
          <Right>
            <Button transparent>
              <Icon name="bulb" />
            </Button>
          </Right>
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