import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import Navigator from './src/components/Navigator'
import Login from './src/components/Login'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends React.Component {
  render() {
    return <Navigator />
  }
  // render() {
  //   return <Login/>
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  }
});