import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import Header from '../Header'
import Questoion from '../Question'

class Home extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
                <Header />
                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'Ubuntu Mono derivative Powerline', fontWeight: "bold", color: '#0002FF', padding: 10 }}>Latest Uploads</Text>
                    <ScrollView horizontal>

                        <Questoion />
                        <Questoion />
                    </ScrollView>
                </View>

            </View>

        )
    }
}


export default Home;