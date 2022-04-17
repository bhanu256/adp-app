import {View, Button, StyleSheet} from 'react-native';
import React from 'react';

const LoginButton = (props) => {

  function onClick() {
    props.callBack(props.title);
  }

  return (
    <View style={[styles.container]}>
      <Button
        style={[styles.button]}
        onPress={() => onClick()}
        title={props.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  button: {
    
  }
});

export default LoginButton;
