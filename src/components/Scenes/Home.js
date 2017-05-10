import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import Header from '../Header'
import Questoion from '../Question'
import { connect } from 'react-redux';
import Shimmer from '../Shimmer';
import { fetchRecentUploads } from '../../actions/HomeAction'
class Home extends Component {
    componentWillMount() {
        this.props.fetchRecentUploads()
    }
    renderData() {
        console.log(this.props.data)
        if (this.props.loading) {
           return  <Shimmer/>
            
        } else {
            return <FlatList style={{ padding: 10 }}
                horizontal
                data={this.props.data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Question item={item} />}

            />
        }
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "#232129" }}>
                <Header />
                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'Ubuntu Mono derivative Powerline', fontWeight: "bold", color: '#fff', padding: 10 }}>Latest Uploads</Text>
                    {this.renderData()}
                    <Text style={{ fontSize: 18, fontFamily: 'Ubuntu Mono derivative Powerline', fontWeight: "bold", color: '#fff', padding: 10, paddingHorizontal: 20 }}>Please Uploads Your Question To Help Other Students</Text>
                </View>

            </ScrollView>

        )
    }
}

const mapStateToProps = state => {
    const { loading, data } = state.home
    return { loading, data }

}
export default connect(mapStateToProps, { fetchRecentUploads })(Home)
