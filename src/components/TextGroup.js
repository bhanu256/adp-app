import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import CommonStyles from '../styles/styles'

const TextGroup = (props) => {
  const reverse = props?.reverse === true ? props.reverse : false;
  return (
    <View style={[styles.container]}>
      <Text style={[CommonStyles.title, {color: reverse ? false : CommonStyles.title.color}]}>{props.title}</Text>
      <Text style={[CommonStyles.subTitle, {color: reverse ? 'black' : CommonStyles.subTitle.color}]}>{props.subTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: 'auto',
    left: 'auto',
    bottom: 'auto',
    top: 'auto',
    width: 'auto',
    height: 'auto',
    marginBottom: 10
  }
})

export default TextGroup;