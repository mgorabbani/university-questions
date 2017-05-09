import {
    FETCH_SEARCH_ERROR,
    FETCH_SEARCH_RESULT,
    FETCHING_SEARCH_RESULT
} from './types';
import _ from 'lodash'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const searchQuestion = (keyword) => {

    return (dispatch) => {
        Actions.search()
        dispatch({
            type: FETCHING_SEARCH_RESULT,
        })
        var ref = firebase.database().ref("questions/");
        ref.orderByChild("code").equalTo(keyword).once("value").then(function (snapshot) {
            dispatch({
                type: FETCH_SEARCH_RESULT,
                payload: _.values(snapshot.val())
            })
        }).catch(() => {
            dispatch({
                type: FETCH_SEARCH_ERROR,
            })
        })
    }
}
