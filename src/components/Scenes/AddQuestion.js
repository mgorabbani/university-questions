import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator ,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { addQuestion } from '../../actions/FormAction'
import { connect } from 'react-redux';


var t = require('tcomb-form-native');
var Form = t.form.Form;

// here we are: define your domain model
var Exam = t.enums({
  Quiz: 'Quiz',
  Mid: 'Mid Term',
  Final: 'Final'
});
var Semester = t.enums({
  Summer: 'Summer',
  Spring: 'Spring',
  Fall: 'Fall'
})

var Person = t.struct({
  subjectCode: t.String,              // a required string
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
      <ScrollView>
        <View  style={styles.container}>
          
        
        <Form
          ref="form"
          type={Person}
          options={options}
          
        />
        <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#0002FF'>
         {this.button()}
        </TouchableHighlight>
        </View>
      </ScrollView>
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

t.form.Form.stylesheet.textbox.normal.fontFamily= 'Ubuntu Mono derivative Powerline';
t.form.Form.stylesheet.textbox.error.fontFamily= 'Ubuntu Mono derivative Powerline';

t.form.Form.stylesheet.controlLabel.normal.fontFamily= 'Ubuntu Mono derivative Powerline';
t.form.Form.stylesheet.controlLabel.error.fontFamily= 'Ubuntu Mono derivative Powerline';


t.form.Form.stylesheet.textbox.normal.borderWidth = 0;
t.form.Form.stylesheet.textbox.error.borderWidth = 0;
t.form.Form.stylesheet.textbox.normal.marginBottom = 0;
t.form.Form.stylesheet.textbox.error.marginBottom = 0;

t.form.Form.stylesheet.controlLabel.normal.borderWidth = 0;
t.form.Form.stylesheet.controlLabel.error.borderWidth = 0;
t.form.Form.stylesheet.textbox.normal.marginBottom = 0;
t.form.Form.stylesheet.textbox.error.marginBottom = 0;

t.form.Form.stylesheet.textboxView.normal.borderWidth = 0;
t.form.Form.stylesheet.textboxView.error.borderWidth = 0;
t.form.Form.stylesheet.textboxView.normal.borderRadius = 0;
t.form.Form.stylesheet.textboxView.error.borderRadius = 0;
t.form.Form.stylesheet.textboxView.normal.borderBottomWidth = 1;
t.form.Form.stylesheet.textboxView.error.borderBottomWidth = 1;
t.form.Form.stylesheet.textbox.normal.marginBottom = 5;
t.form.Form.stylesheet.textbox.error.marginBottom = 5;

var styles = {
  container: {
    justifyContent: 'center',
    marginTop: 65,
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
    backgroundColor: '#0002FF',
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
}