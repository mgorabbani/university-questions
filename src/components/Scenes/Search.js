import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Question from '../Question'


import { connect } from 'react-redux';

 class Search extends Component {

  renderData(){
    console.log(this.props.data)
    if(this.props.loading) {
     return  <Text>Fetching Results...</Text>
    } else {
     return <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => <Question item={item}/>}
          numColumns={2}
        />
    }
  }
  render() {
    console.log(this.props)
    return (
      <View style={{ marginTop: 65 }}>
        {this.renderData()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log("serch "+state)
    const {loading,error,data} = state.search
    return {loading,error,data}
    
}
export default connect(mapStateToProps)(Search)
