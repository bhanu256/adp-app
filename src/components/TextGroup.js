import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import CommonStyles from '../styles/styles'

const TextGroup = (props) => {
  const reverse = props?.reverse === true ? props.reverse : false;
  return (
    <View style={[styles.container]}>
      <Text style={[(reverse && {color: 'grey'}), CommonStyles.title]}>{props.title}</Text>
      <Text style={[(reverse && {color: 'black'}), CommonStyles.subTitle]}>{props.subTitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    right: 'auto',
    left: 'auto',
    bottom: 'auto',
    top: 'auto',
    marginBottom: 10
  }
})

export default TextGroup;