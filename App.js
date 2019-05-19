'use strict';
import React, {Component} from 'react';
import {
  StyleSheet, 
   } from 'react-native';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import DetailPage from './DetailPage';


const AppNavigator = createStackNavigator({
  Home:{screen:SearchPage},
  Results:{screen:SearchResults},
  Detail:{screen:DetailPage},
});
const App = createAppContainer(AppNavigator);
export default App;
