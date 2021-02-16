import React from 'react';
import {WebView} from 'react-native-webview';

const Reader = ({navigation, route}) => {
  return (
    <WebView
      source={{
        uri: route.params.url,
      }}
    />
  );
};

export default Reader;
