import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from 'react-native-material-design-searchbar';

class Header extends Component {

    render() {
        return (
            <View style={{ padding: 10, backgroundColor: "#0012FF" }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }} >
                    <TouchableWithoutFeedback>
                        <Icon name="menu" color="#fff" size={20} />
                    </TouchableWithoutFeedback>
                    <Text style={{ paddingLeft: 20, color: "#fff", fontSize: 20, fontWeight: 'bold', fontFamily: "Ubuntu Mono derivative Powerline" }}>DIU Questions</Text>
                </View>
                <SearchBar
                    inputStyle={{ backgroundColor: "#fff", borderWidth: 0, borderRadius: 2 }}
                    iconColor="#0012FF"
                    onSearchChange={() => console.log('On Focus')}
                    height={40}
                    onFocus={() => console.log('On Focus')}
                    onBlur={() => console.log('On Blur')}
                    placeholder={'Search...'}
                    autoCorrect={false}
                    padding={5}
                    returnKeyType={'search'}
                />
                
            </View>

        )
    }
}

export default Header;