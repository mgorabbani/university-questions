import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';


import Home from './Scenes/Home'
import AddQuestion from './Scenes/AddQuestion';
import Search from './Scenes/Search'
import Single from './Scenes/Single'
import About from './Scenes/About'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" hideNavBar={true} initial={true}/>
          <Scene key="search" component={Search} title="Search" hideNavBar={false} backTitle="<"  />
          <Scene key="single" component={Single} title="Single" hideNavBar={false}  />
          <Scene key="addQuestion" component={AddQuestion} title="Add Question" hideNavBar={false} />
        </Scene>
      </Router>
    )
  }
}