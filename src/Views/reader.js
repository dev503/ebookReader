import React, {useEfect, useState} from 'react';
import {WebView} from 'react-native-webview';
import * as axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

const Reader = ({navigation}) => {
  function listarLibros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
      axios
        .post('http://backoffice.moondevsv.com/Backend/public/books/list', {
          token: '12345',
        })
        .then((res) => {
          setLibros(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
  }
  // return (
  //   <></>
  // );
  return (
    <WebView
    source={{
      // uri: 'https://rf-stuffs.s3-us-west-2.amazonaws.com/input.html',
      uri: 'http://backoffice.moondevsv.com/Reader/index.php?idbook=1&fbclid=IwAR1pABWchF4ylWzouW9Nz-0kL_km-k9F-E47xFi6MAgub2WxLh7EB4f43p0'
      
    }}
  />

    
  );
};

export default Reader;
