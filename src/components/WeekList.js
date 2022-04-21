import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import WeekDayCircle from './WeekDayCircle';

const WeekList = () => {
  const weekdays = [];
  for (let index = 0; index < 7; index++) {
    weekdays.push(
      <WeekDayCircle 
        active={false}
        weekDay='M'
        id={index}
        key={index}
      />
    )
  }
  return (
    <View style={[styles.container]}>
      { weekdays }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default WeekList