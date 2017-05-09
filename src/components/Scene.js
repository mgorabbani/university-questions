import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';


import Home from './Scenes/Home'
import AddQuestion from './Scenes/AddQuestion';
import Search from './Scenes/Search'
import Single from './Scenes/Single'
import About from './Scenes/About'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';

import { Actions } from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" navigationBarStyle={{ backgroundColor: "#0002FF",borderBottomWidth:0 }} titleStyle={{ color: "#fff", fontFamily: 'Ubuntu Mono derivative Powerline', fontSize: 17, fontWeight: 'bold',borderBottomWidth:0 }} >

          <Scene key="home" component={Home} title="DIU Questions"  initial={true} onRight={() => Actions.addQuestion()} rightTitle={<Entypo name="add-to-list" size={24} color="#fff" />}/>
          <Scene key="search" component={Search} title="Search" hideNavBar={false} backTitle={<Icon name="keyboard-backspace" size={24} color="#fff" />} />
          <Scene key="single" component={Single} title="Detail Image"  hideNavBar={false} backTitle={<Icon name="keyboard-backspace" size={24} color="#fff" />} />
          <Scene key="addQuestion" component={AddQuestion} title="Add Question" hideNavBar={false} backTitle={<Icon name="keyboard-backspace" size={24} color="#fff" />} />
        </Scene>
      </Router>
    )
  }
}