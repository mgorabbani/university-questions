import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

export default Question = (props) => {
    const { exam, semester, year, subjectCode, url } = props.item
    return (
        <TouchableWithoutFeedback onPress={() => console.log('will open image view')}>
            <View style={styles.box}>
                <View style={{ padding: 10, alignItems: 'flex-start' }} >
                    <Text style={{  }}>Subject Code: {subjectCode}</Text>
                    <Text style={{  }}>Exam Type: {exam}</Text>
                    <Text style={{  }}>Semester: {semester}</Text>
                    <Text style={{  }}>Year: {year}</Text>
                </View>
                <View style={{ padding: 10 }} >
                    <Image
                        style={{ width: 145, height: 150 }}
                        source={{ uri: url }}
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