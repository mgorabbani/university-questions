import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { addQuestion, selectImage } from '../../actions/FormAction'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
 constructor(){
   super()
   this.state = {
   img_loading:false
 }
 }
 componentWillMount() {
   this.setState({img_loading:this.props.img_loading})
 }
  onPress() {
    let url = this.props.source
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      this.props.addQuestion({ value, url })
    }
  }
  button() {
    return this.props.loading ? <ActivityIndicator size="large" /> : <Text style={styles.buttonText}>Save</Text>
  }
  imageLoading() {
    console.log("State",this.state)
    
    if (this.state.img_loading) {
      console.log("activity",this.state.img_loading)
      return <ActivityIndicator size="large" />

    } else {
       console.log("image",this.state.img_loading)
     return <Image
        source={{ uri: this.props.image_data }}
        style={styles.image}
      />
    }
  }
  render() {

    return (
      <ScrollView>
        <View style={styles.container}>


          <Form
            ref="form"
            type={Person}
            options={options}

          />

          <View style={{ flexDirection: 'row', paddingVertical: 10 }} >
            <Text style={{ fontSize: 17, fontFamily: 'Ubuntu Mono derivative Powerline', fontWeight: "bold", color: '#232129', }}>Upload Question</Text>
            <TouchableHighlight
              style={styles.upload}
              onPress={() => this.props.selectImage()}
              underlayColor='#fff'>
              <View style={{ flexDirection: 'row', }} >
                <Icon name="folder-upload" size={24} color="#232129" />
                {/*<Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, fontFamily: 'Ubuntu Mono derivative Powerline' }} >{this.props.source}</Text>*/}
                {this.imageLoading()}

              </View>

            </TouchableHighlight>

          </View>
          <TouchableHighlight style={styles.button} onPress={() => this.onPress()} underlayColor='#0002FF'>
            {this.button()}
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}


const mapStateToProps = state => {

  const { loading, error, img_fail, source, image_data, img_loading } = state.form
  return { loading, error, img_fail, source, image_data, img_loading }

}
export default connect(mapStateToProps, {
  addQuestion, selectImage
})(AddQuestion)

t.form.Form.stylesheet.textbox.normal.fontFamily = 'Ubuntu Mono derivative Powerline';
t.form.Form.stylesheet.textbox.error.fontFamily = 'Ubuntu Mono derivative Powerline';

t.form.Form.stylesheet.controlLabel.normal.fontFamily = 'Ubuntu Mono derivative Powerline';
t.form.Form.stylesheet.controlLabel.error.fontFamily = 'Ubuntu Mono derivative Powerline';


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
    backgroundColor: '#232129',
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  upload: {
    paddingHorizontal: 10,
    marginTop: -3
  },
  image: {
    height: 100,
    width: 100,
    marginHorizontal: 10
  }
}