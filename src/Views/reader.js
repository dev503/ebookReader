import React from 'react';
import {WebView} from 'react-native-webview';

const Reader = ({navigation}) => {
  // return (
  //   <></>
  // );
  return (
    <WebView
      source={{uri: 'https://rf-stuffs.s3-us-west-2.amazonaws.com/input.html'}}
    />
  );
};

export default Reader;
