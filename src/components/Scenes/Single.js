import React, { Component } from 'react';
import { View, Text, Image, Button,ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import PhotoView from 'react-native-photo-view';
import Dimensions from 'Dimensions'

let window = Dimensions.get('window')
export default class PageOne extends Component {
  constructor() {
    super()
    this.state = {
      height:Dimensions.get('window').height,
      width:Dimensions.get('window').width
    }
  }
  render() {
console.log(this.state)
    return (

        <PhotoView
          source={{ uri: this.props.url }}
          minimumZoomScale={1}
          maximumZoomScale={6}
          androidScaleType="center"
          onLoad={() => console.log("Image loaded!")}
          style={{flex:1,height:null,width:null}} 
          resizeMode="cover"
          onLoadStart={()=> <ActivityIndicator size="large" style={{alignItems:'center',justifyContent:'center'}}/>}
          />


    )
  }
}

