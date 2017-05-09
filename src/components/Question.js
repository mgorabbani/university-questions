import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default Question = (props) => {
    const {exam,semester,year} = props.item
    return (
        <TouchableWithoutFeedback onPress={()=>Actions.single()}>
            <View style={{ flexDirection: 'column', alignItems: 'center', width: 170, padding: 10, margin: 10, backgroundColor: "#fff", shadowColor: '#ccc', shadowOpacity: 2, shadowOffset: { height: 2, width: 0 }, borderRadius: 3 }}>
                <View style={{ paddingVertical: 10 }} >
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Exam Type: {exam}</Text>
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Semester: {semester}</Text>
                    <Text style={{ fontFamily: 'Ubuntu Mono derivative Powerline' }}>Year: {year}</Text>
                </View>
                <View>
                    <Image
                        style={{ width: 150, height: 180 }}
                        source={{ uri: 'https://placeholdit.imgix.net/~text?txtsize=24&txt=256×256&w=256&h=350' }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}