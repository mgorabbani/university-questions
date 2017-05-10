import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StatusBar, 
    Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import SearchBar from 'react-native-material-design-searchbar';
import { Actions } from 'react-native-router-flux';
import { searchQuestion } from '../actions/SearchAction'
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        search: ''
    }
    _onBlur() {
        if (this.state.search.length > 0) {
            console.log('On search')
            this.props.searchQuestion(this.state.search)
        } else {
            console.log('On Blur', this.state)
        }
    }
    render() {
        return (
            <View style={{ marginTop: Platform == 'ios' ? 63 : 54, backgroundColor: "#000", padding:5}}>
                <StatusBar barStyle='light-content' backgroundColor='#333' />
                <SearchBar
                    inputStyle={{ backgroundColor: "#fff", borderWidth: 0, borderRadius: 2 }}
                    iconColor="#111111"
                    onSearchChange={(value) => this.setState({ search: value })}
                    height={40}
                    onFocus={() => console.log('On Focus')}
                    onBlur={() => this._onBlur()}
                    placeholder={'Search...'}
                    autoCorrect={false}
                    returnKeyType={'search'}
                />

            </View>

        )
    }
}

export default connect(null, { searchQuestion })(Header);