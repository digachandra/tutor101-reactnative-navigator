import React from 'react'
import {
  ListView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import * as firebase from 'firebase'
import ActionButton from '../_component/ActionButton'
import GroceryItem from '../_component/GroceryItem'
import Title from '../_component/Title'

const config = {
  apiKey: "AIzaSyAyN8YCIweEzP-gzr-ZGTxeyIsshPa3GB0",
  authDomain: "reactnative-e1ae6.firebaseapp.com",
  databaseURL: "https://reactnative-e1ae6.firebaseio.com",
  storageBucket: "reactnative-e1ae6.appspot.com",
  messagingSenderId: "318927502684"
}
const firebaseApp = firebase.initializeApp(config)

export default class PageOne extends React.Component {
  constructor(props){
    super(props)
    this._handlePress = this._handlePress.bind(this)

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      })
    }

    this.itemsRef = this._getRef().child('items')
  }

  _getRef(){
    return firebaseApp.database().ref()
  }

  _listenForItems(itemsRef) {
    itemsRef.on('value', (firebaseItem) => {
      let items = []
      firebaseItem.forEach((item) => {
        items.push({
          title: item.val().title,
          _key: item.key
        })
      })

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      })
    })
  }

  _handlePress(){
    this.props.navigator.push({id:2})
  }

  _renderItem(item) {
    return (
      <GroceryItem item={item} />
    )
  }

  _addItem() {
    this.itemsRef.push({title: this.state.textInput})
    this.setState({textInput: ''})
  }

  componentDidMount() {
    this._listenForItems(this.itemsRef)
  }

  render(){
    return (
      <View>
        <View>
          <Title text='Anonymous Chat App' />
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} />
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            value={this.state.textInput}
            onChangeText={(text) => this.setState({textInput: text})}
          />
          <ActionButton title='Add' onPress={this._addItem.bind(this)} />
        </View>
      </View>
      // <View style={{padding:60}}>
      //   <Text>Greetings From Page 1!</Text>
      //   <TouchableOpacity onPress={this._handlePress.bind(this)}>
      //     <View style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'black'}}>
      //       <Text style={{color:'white'}}>Go to page 2</Text>
      //     </View>
      //   </TouchableOpacity>
      // </View>
    )
  }
}
