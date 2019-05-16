'use strict';
import React, {Component} from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Text style={styles.description}>Search for houses to buy!</Text>;
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize:18,
    textAlign:'center',
    color:'#656565',
    marginTop:65,
  }
});
