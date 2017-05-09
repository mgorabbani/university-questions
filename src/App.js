/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';


import store from './store'
import Scene from './components/Scene'


export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDGi_zZIX7naqsyvGFcKt4uYtTb6N6boEs",
            authDomain: "diuquestions.firebaseapp.com",
            databaseURL: "https://diuquestions.firebaseio.com",
            projectId: "diuquestions",
            storageBucket: "diuquestions.appspot.com",
            messagingSenderId: "319202974092"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Scene />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    }
});

