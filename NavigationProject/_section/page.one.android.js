import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default class PageOne extends Component {
  constructor(props){
    super(props)
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress(){
    this.props.navigator.push({id:2})
  }

  render(){
    return (
      <View style={{padding:60}}>
        <Text>Greetings From Page 1!</Text>
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'black'}}>
            <Text style={{color:'white'}}>Go to page 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
