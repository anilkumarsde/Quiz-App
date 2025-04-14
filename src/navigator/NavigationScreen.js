import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


import WelcomeScreen from '../screen/WelcomeScreen';
import QuestionScreen from '../screen/QuestionScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ResultScreen from '../screen/ResultScreen';

const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
