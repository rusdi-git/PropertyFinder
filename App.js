'use strict';
import React, {Component} from 'react';
import {
  StyleSheet, 
   } from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';


const AppNavigator = createStackNavigator({
  Home:{screen:SearchPage},
});
const App = createAppContainer(AppNavigator);
export default App;
