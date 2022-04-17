import {Text, View, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  function getStoredCredentials() {
    AsyncStorage.removeItem('email');
    AsyncStorage.getItem('email')
      .then(data => {
        if (data !== null) {
          navigation.navigate('home');
        } else {
          navigation.navigate('login');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getStoredCredentials();
  });

  return (
    <View style={[styles.container]}>
      <Text>App Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
