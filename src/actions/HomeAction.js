import {
    FETCH_RECENT_UPLOADS,
    FETCH_RECENT_UPLOADS_FAILED,
    FETCHING_RECENT_UPLOADS
} from '../actions/types';

import _ from 'lodash'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const fetchRecentUploads = (keyword) => {

    return (dispatch) => {
        dispatch({
            type: FETCHING_RECENT_UPLOADS,
        })
        var ref = firebase.database().ref("questions/");
       ref.limitToLast(3).once('value').then(function (snapshot) {  
           console.log(snapshot)
            dispatch({
                type: FETCH_RECENT_UPLOADS,
                payload: _.reverse(_.values(snapshot.val()))
            })
        }).catch(() => {
            dispatch({
                type: FETCH_RECENT_UPLOADS_FAILED,
            })
        })
    }
}