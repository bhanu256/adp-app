import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

class Splash extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.getStoredCredentials();
  }

  getStoredCredentials() {
    AsyncStorage.removeItem('email');
    AsyncStorage.getItem('email')
      .then((data) => {
        if (data !== null) {
          this.props.navigation.navigate('home');
        } else {
          this.props.navigation.navigate('login');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text>App Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
