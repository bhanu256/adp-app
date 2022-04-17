import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

import { firebase } from './src/firebase/config';

const Stack = createNativeStackNavigator();

function App() {
  const loaded = firebase.name ? true : false;
  return (
        <NavigationContainer style={[styles.container]}>
        <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown: false}}>
          <Stack.Screen name='splash' component={Splash}></Stack.Screen>
          <Stack.Screen name='login' component={Login}></Stack.Screen>
          <Stack.Screen name='home' component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

export default App;