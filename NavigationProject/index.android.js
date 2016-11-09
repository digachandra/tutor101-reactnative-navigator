/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native'

import PageOne from './_section/page.one'
import PageTwo from './_section/page.two'
import PageThree from './_section/page.three'

export default class NavigationProject extends Component {
  _renderScrene(route, navigator){
    if(route.id ==1){
      return <PageOne navigator={navigator} />
    } else if(route.id == 2){
      return <PageTwo navigator={navigator} />
    } else if(route.id == 3){
      return <PageThree navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id:1}}
        renderScene={this._renderScrene}
      />
    )
  }
}

AppRegistry.registerComponent('NavigationProject', () => NavigationProject);
