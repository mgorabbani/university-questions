import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default Shimmer = () => {

    return (

        <View style={styles.box}>
            <View style={{ padding: 10, alignItems: 'flex-start' }} >
                <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Subject Code: </Text>
                <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Exam Type: </Text>
                <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Semester: </Text>
                <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Year: </Text>
            </View>
            <View style={{ padding: 10 }} >
                <Image
                    style={{ width: 145, height: 150 }}
                    source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=24&txt=256×256&w=256&h=350' }}
                />
            </View>
        </View>


    )
}

styles = {
    box: {
        flexDirection: 'column',
        width: 165,
        padding: 0,
        marginVertical: 10,
        marginRight: 10,
        backgroundColor: "#fff",
        shadowColor: '#ccc',
        shadowOpacity: 2,
        shadowOffset: { height: 2, width: 0 },
        borderRadius: 3
    }
}