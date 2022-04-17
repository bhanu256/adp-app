import { View, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'

import LoginButton from '../components/LoginButton'

const Login = () => {

  function onChildCallBackEvent(name) {
    console.log(name);
  }

  return (
    <View style={[styles.container]}>
      <LoginButton 
        callBack={onChildCallBackEvent}
        title='Microsoft'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Login