import React from "react";
import { View, Text ,Thumbnail, Button, List, ListItem,} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
const uri = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png";
export default Sidebar = (props) => (
  
  <View
    style={{
      flex: 2,
      width: "100%",
      backgroundColor: "white",
      height: "100%",
      justifyContent: "center",
    }}
  >
    <Grid style={{alignItems: 'center'}}>
        <Row style={{ flex: 1, flexDirection: 'row',alignItems: 'center'}}>
          <Col style={{ alignItems: 'center'}}>
          <Thumbnail large source={{uri: uri}} style={{ height: 200,width:200}}/>
          <Text>Epub Reader</Text>
          </Col>
        </Row>   
        <Row style={{ flex: 3, flexDirection: 'row'}}>
          <Col>
          <List button>
            <ListItem full button>
            
                <Text style={{ fontSize:18, color: 'black'}}>Epub Reader s</Text>
      
            </ListItem>
            <ListItem>
        
                <Text style={{ fontSize:18, color: 'black'}}>Epub Reader</Text>
       
            </ListItem>
          </List>
           
          </Col>
          
        </Row>  
        
    </Grid>
  </View>
);