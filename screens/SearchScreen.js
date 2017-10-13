import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Question from '../components/Question'



 class Search extends Component {
state ={
    data :[
      {exam:'quiz', semester:'summer', year:'2014', subjectCode:'swe112', url:'http://lorempixel.com/400/200/' },
      {exam:'quiz', semester:'summer', year:'2014', subjectCode:'swe112', url:'http://lorempixel.com/400/200/' },
      {exam:'quiz', semester:'summer', year:'2014', subjectCode:'swe112', url:'http://lorempixel.com/400/200/' }
    ]
  }
  renderData(){

     return <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => <Question item={item}/>}
          numColumns={2}
        />
  }
  render() {
    console.log(this.props)
    return (
      <View style={{paddingLeft:10}} >
        {this.renderData()}
      </View>
    )
  }
}


export default Search
