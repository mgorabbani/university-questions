import {
    ADD_QUESTION,
    ADD_QUESTION_FAILED,
    ADD_QUESTION_SUCCESS,
    QUESTION_FETCH_SUCCESS,
    QUESTION_ADDING
} from './types';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export const addQuestion = (value) => {
    console.log(value)
    const {code,exam,semester,year} = value
    return(dispatch) => {
        dispatch({
            type:QUESTION_ADDING
        })
        firebase.database().ref(`/questions/`)
            .push({ code,exam,semester,year })
            .then(() => {
                console.log("success")
                dispatch({
                    type: ADD_QUESTION
                })
                Actions.home({type:'reset'})
            }).catch((e) => {
                console.log(e)
                dispatch({
                    type: ADD_QUESTION_FAILED
                })
            })
    }


}

export const searchQuestion = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: QUESTION_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}
