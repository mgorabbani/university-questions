import * as T from './types'
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export const emailChanged = (text) => {
    return {
        type: T.EMAIL_CHANGED,
        payload: text
    }
}
export const passChanged = (text) => {
    return {
        type: T.PASS_CHANGED,
        payload: text
    }
}

export const userLogin = ({ email, pass }) => {
    return (dispatch) => {
        dispatch({
            type:T.LOGIN_USER
        })
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(user => successLogin(dispatch, user)).catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                    .then(user => successLogin(dispatch, user)).catch((e) => {
                        dispatch({
                            type: T.LOGIN_USER_FAIL,
                            payload: e
                        })
                    })
            })
    }

}

function successLogin(dispatch,user) {
    dispatch({
        type: T.LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main()
}