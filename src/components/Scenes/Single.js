import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class PageOne extends Component {
  constructor() {
    super()
    this.getImage = this.getImage.bind(this)
    this.state = {
      image_uri: 'https://avatars0.githubusercontent.com/u/12028011?v=3&s=200'
    }
  }

  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
        <Image source={{ uri: this.state.image_uri }} style={{ width: 100, height: 100 }} />
        
      </View >
    )
  }
}