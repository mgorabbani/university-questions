import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default Question = (props) => {
    const { exam, semester, year, subjectCode } = props.item
    return (
        <TouchableWithoutFeedback onPress={() => Actions.single()}>
            <View style={styles.box}>
                <View style={{ padding: 10, alignItems: 'flex-start' }} >
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Subject Code: {subjectCode}</Text>
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Exam Type: {exam}</Text>
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Semester: {semester}</Text>
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Year: {year}</Text>
                </View>
                <View style={{ padding: 10 }} >
                    <Image
                        style={{ width: 145, height: 150 }}
                        source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=24&txt=256×256&w=256&h=350' }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>

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