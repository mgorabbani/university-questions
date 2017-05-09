import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from 'react-native-material-design-searchbar';
import { Actions } from 'react-native-router-flux';
class Header extends Component {
    state = {
        search: ''
    }
    _onBlur(){
        if(this.state.search.length>5) {
            console.log('On search')
            Actions.search({keyword:this.state.search})
        } else {
        console.log('On Blur',this.state)
        }
    }
    render() {
        return (
            <View style={{ padding: 10, backgroundColor: "#0012FF" }}>
                 <StatusBar barStyle = 'dark-content'  backgroundColor = '#0012FF'/>
                <View style={{ flexDirection: "row", alignItems: 'center',justifyContent:'space-between',paddingVertical:10 }} >
                   
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: 'bold', fontFamily: "Ubuntu Mono derivative Powerline" }}>DIU Questions</Text>
                     <TouchableWithoutFeedback onPress={()=>Actions.addQuestion()}>
                        <Icon name="plus" color="#fff" size={20} />
                    </TouchableWithoutFeedback>
                </View>
                <SearchBar
                    inputStyle={{ backgroundColor: "#fff", borderWidth: 0, borderRadius: 2 }}
                    iconColor="#0012FF"
                    onSearchChange={(value) => this.setState({search:value})}
                    height={40}
                    onFocus={() => console.log('On Focus')}
                    onBlur={() => this._onBlur()}
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