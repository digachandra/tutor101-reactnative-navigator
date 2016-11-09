import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class ActionButton extends React.Component {
  render() {
    const styles = StyleSheet.create({
      action: {
        backgroundColor: '#bada55',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16
      },
      actionColor: {
        color: '#24CE84'
      },
      actionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
      }
    })
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={styles.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
