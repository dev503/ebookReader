import React  from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';

export default HeaderCont = () => {
    return(
        <Header>
          <Left>
          <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
          </Right>
        </Header>
    );

}
// export default class HeaderIconExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon name='arrow-back' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Header</Title>
//           </Body>
//           <Right>
//             <Button transparent>
//               <Icon name='menu' />
//             </Button>
//           </Right>
//         </Header>
//       </Container>
//     );
//   }
// }