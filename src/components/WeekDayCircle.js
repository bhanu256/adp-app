import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const WeekDayCircle = (props) => {
  const active = props.active ? true : false;

  return (
    <View style={[styles.circle, (active ? styles.activeCircle : styles.disabledCircle)]} key={props.id}>
      <Text>{props.weekDay}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center'
  },
  disabledCircle: {
    backgroundColor: 'grey',
    color: 'grey'
  },
  activeCircle: {
    backgroundColor: 'blue',
    color: 'blue'
  }
})

export default WeekDayCircle