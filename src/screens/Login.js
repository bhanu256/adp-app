import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import CustomButton from '../components/CustomButton';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function onChildCallBackEvent(name) {
    console.log(name);
  }

  function onSubmit() {
    console.log(mail + password);
    navigation.navigate('tabsNavigation');
  }

  return (
    <View style={[styles.container]}>
      <TextInput
        value={mail}
        onChangeText={setMail}
        placeholder="Enter mail address"
        style={[styles.items, styles.textInputDec]}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
        style={[styles.items, styles.textInputDec]}
      />
      <TouchableOpacity
        onPress={() => onSubmit()}
        style={[styles.items, styles.submitButton]}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text>OR</Text>
      <CustomButton
        callBack={onChildCallBackEvent}
        title="Microsoft"
        style={[styles.items]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  items: {
    width: '80%',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  textInputDec: {
    borderRadius: 5,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

export default Login;
