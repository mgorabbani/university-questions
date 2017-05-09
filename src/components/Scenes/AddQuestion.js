import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { addQuestion } from '../../actions/FormAction'
import { connect } from 'react-redux';


var t = require('tcomb-form-native');
var Form = t.form.Form;

// here we are: define your domain model
var Exam = t.enums({
  Quiz: 'Quix',
  Mid: 'Mid Term',
  Final: 'Final'
});
var Semester = t.enums({
  Summer: 'Summer',
  Spring: 'Spring',
  Fall: 'Fall'
})

var Person = t.struct({
  code: t.String,              // a required string
  exam: Exam,
  semester: Semester,
  year: t.Number,
});
var options = {};
class AddQuestion extends Component {
  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      this.props.addQuestion(value)
    }
  }
  button(){
    return this.props.loading? <ActivityIndicator size="large" /> : <Text style={styles.buttonText}>Save</Text>
  }
  render() {
    {if(this.props.error) alert(this.props.error)}
    return (
      <View style={{ marginTop: 100 }}>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#99d9f4'>
         {this.button()}
        </TouchableHighlight>
      </View>
    )
  }
}


const mapStateToProps = state => {

    const {loading,error} = state.form
    return {loading,error}
    
}
export default connect(mapStateToProps, {
  addQuestion
})(AddQuestion)

var styles = {
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 10,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}