import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator, ScrollView, Image, DeviceEventEmitter, Platform } from 'react-native';


import Icon from 'react-native-vector-icons/Entypo';
var t = require('tcomb-form-native');
var Form = t.form.Form;
import * as firebase from 'firebase';
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
  constructor(props) {
    super(props)
    this.state = {
      value: {
        subjectCode: 'swe221',
        year: 2016,
        exam: 'Mid',
        semester: 'Summer',
      },
      image: null,
      uploading: false,
    }
  }

  onPress() {
    let url
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue()

    if (value && url) { // if validation fails, value will be null
      const { subjectCode, exam, semester, year } = value
      console.log(subjectCode, exam, semester, year, url);
    } else {
      console.log('please upload the quesiton!')
    }
  }
  button() {
    return this.props.loading ? <ActivityIndicator size="large" /> : <Text style={styles.buttonText}>Save</Text>
  }
  imageLoading() {
    console.log("State", this.props)

    if (this.props.img_loading) {
      return <ActivityIndicator size="large" />

    } else {

      return <Image
        source={{ uri: this.props.image }}
        style={styles.image}
      />
    }
  }
  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };
  // _pickImage = async () => {
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     base64: true,
  //   });

  //   this._handleImagePicked(pickerResult);
  // };
  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      var metadata = {
        contentType: 'image/png',
      };
      //Concat the image type to the base64 data
      let message = 'data:image/jpeg;base64, ' + pickerResult.base64;
      const sessionId = new Date().getTime()
      //Uploads the base64 to firebase as a raw string, with the specified metadata
firebase.storage().ref('images').child(`${sessionId}`).putString(message, "raw", metadata).then((uploadResult) => {
  console.log(uploadResult)
  this.setState({ image: uploadResult.location });
}).catch((err) => console.log(err));
     
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({ uploading: false });
    }
  };


  render() {
    return (
      <ScrollView>
        <View style={styles.container}>


          <Form
            ref="form"
            type={Person}
            options={options}
            onChange={(value) => this.setState({ value })}
            value={this.state.value}
          />

          <View style={{ flexDirection: 'row', paddingVertical: 10 }} >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: '#232129', }}>Upload Question</Text>
            <TouchableHighlight
              style={styles.upload}
              onPress={() => this._pickImage()}
              underlayColor='#fff'>
              <View style={{ flexDirection: 'row', }} >
                <Icon name="folder-upload" size={24} color="#232129" />
                {/*<Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13 }} >{this.props.source}</Text>*/}
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



export default AddQuestion;

// t.form.Form.stylesheet.textbox.normal.fontFamily = 'space-mono';
// t.form.Form.stylesheet.textbox.error.fontFamily = 'space-mono';

// t.form.Form.stylesheet.controlLabel.normal.fontFamily = 'space-mono';
// t.form.Form.stylesheet.controlLabel.error.fontFamily = 'space-mono';


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