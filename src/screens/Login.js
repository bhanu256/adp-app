import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAuth, signInWithRedirect, getRedirectResult, signInWithPopup, OAuthProvider} from 'firebase/auth';

import { firebase } from '../firebase/config';

import LoginButton from '../components/LoginButton'

class Login extends Component {

  constructor(props) {
    super(props);

    this.onChildCallBackEvent = this.onChildCallBackEvent.bind(this);
  }

  componentDidMount() {
    // AsyncStorage.setItem('email', 'mail').then(() => {

    // }).catch((err) => {
    //   console.error(err);
    // })
  }

  async onChildCallBackEvent(name) {
    const provider = new OAuthProvider('microsoft.com');
    provider.addScope('User.Read');
    provider.setCustomParameters({
      prompt: 'consent',
      login_hint: 'user@firstadd.onmicrosoft.com'
    });
    const auth = getAuth();
    console.log(getAuth());
    // await signInWithRedirect(auth, provider)

    // getRedirectResult().then((result) => {
    //   console.log(result);
    // }).catch((err) => {
    //   console.log(err);
    // })

    await signInWithPopup(auth, provider);
    // signInWithPopup(auth, provider).then((result) => {
    //   console.log(result);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }

  render() {
    return (
      <View style={[styles.container]}>
        <LoginButton 
          callBack={this.onChildCallBackEvent}
          title='Microsoft'
        />
      </View>
    )
  }
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