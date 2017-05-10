/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Touchable,
  TextInput,
  View,
  WebView
  
} from 'react-native';


export default class nativeApp extends Component {
  constructor(props){
      super(props);
      this.state={
          url:"http://192.168.191.3:8080"
      }
  }
  render() {
    return (
      <View style={styles.flex}>
        <TextInput
        style={{margin:10, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({url:text})}
        value={this.state.url}
      />
        <WebView
          automaticallyAdjustContentInsets={false}
          source={{uri: this.state.url}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
     flex: 1
  },
  
});

AppRegistry.registerComponent('rNProject', () => nativeApp);
