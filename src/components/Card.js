import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import CommonStyles from '../styles/styles';

const Card = (props) => {
  return (
    <View style={[styles.container]}>
      <Text style={[CommonStyles.cardTitle]}>{props.title}</Text>

      { props.children }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
});

export default Card;
