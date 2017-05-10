import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

var ImagePicker = require('react-native-image-picker');
var options = {
  title: 'Select Avatar',
  customButtons: [
    { name: 'fb', title: 'Choose Photo from Facebook' },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class PageOne extends Component {
  constructor() {
    super()
    this.getImage = this.getImage.bind(this)
    this.state = {
      image_uri: 'https://avatars0.githubusercontent.com/u/12028011?v=3&s=200'
    }
  }
  getImage() {


    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({ image_uri: response.uri })

        let image_uri = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    })
  }
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text onPress={Actions.pageTwo}>This is PageOne!</Text>
        <Image source={{ uri: this.state.image_uri }} style={{ width: 100, height: 100 }} />
        <Button
          onPress={this.getImage}
          title="Change Image"
          color="#841584"
        />
      </View >
    )
  }
}