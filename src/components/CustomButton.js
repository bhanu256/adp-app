import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = props => {
  const render = props?.render === false ? false : true;

  function onClick() {
    if (!props.callBack) return;

    props.callBack(props.title);
  }

  if (render) {
    return (
      <View style={[styles.container, props.styleColors]}>
      <TouchableOpacity
        onPress={() => onClick()}
      >
        <Text style={[props.styleColors]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
    );
  }
  else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderColor: '#DDD1',
    borderRadius: 2,
    borderWidth: 1
  },
  button: {
  },
});

export default CustomButton;
