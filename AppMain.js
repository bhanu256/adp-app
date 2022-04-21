import { StyleSheet } from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashNavigation from './src/screens/SplashNavigation';
import { firebase } from './src/firebase/config';

function App() {
  const loaded = firebase.name ? true : false;
  return (
    <SafeAreaProvider style={[styles.container]}>
      <SplashNavigation />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App;