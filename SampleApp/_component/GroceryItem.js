import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class GroceryItem extends React.Component {
  render() {
    const styles = StyleSheet.create({
      li: {

      },
      liText: {

      }
    })
    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
