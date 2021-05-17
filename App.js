/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import Dashboard from './src/Views/dashboard';
import PersonalPubs from './src/Views/personalPubs';
import Home from './src/Views/home';
import Login from './src/Views/login';
import Register from './src/Views/register';
import ForgotPassword from './src/Views/forgot-password.js';
import NewPassword from './src/Views/new-password.js';
import Reader from './src/Views/reader.js';
import MyProfile from './src/Views/myprofile.js';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="PersonalPubs" component={PersonalPubs} />
        <Stack.Screen name="Register" component={Register} options={{title: 'Registro'}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Reader" component={Reader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
