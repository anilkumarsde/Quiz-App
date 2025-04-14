import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationScreen from './src/navigator/NavigationScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screen/WelcomeScreen';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
