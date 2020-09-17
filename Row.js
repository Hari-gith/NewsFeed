import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
  row: {padding: 20},
})

const Row = props => (
  <View style={styles.row}>
    <Text>{props.author}</Text>
    <Text>{props.title}</Text>
  </View>
)

export default Row
