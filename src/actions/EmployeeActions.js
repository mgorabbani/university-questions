import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_CREATE_DONE,
    EMPLOYEE_CREATE_FAILED,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = (name, phone, shift) => {
    const { currentUser } = firebase.auth()

    return (dispatch) => {
        dispatch({
            type: EMPLOYEE_CREATE
        })
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_CREATE_DONE
                })
                Actions.employeeList({ type: 'reset' })
            }).catch(() => {
                dispatch({
                    type: EMPLOYEE_CREATE_FAILED
                })
            })
    }
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEE_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}

export const employeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
                Actions.employeeList({ type: 'reset' })

            })
    }
}

export const employeeFire = (uid) => {
    const { currentUser } = firebase.auth()
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove().then(() => {
                Actions.employeeList({ type: 'reset' })
            })
    }

}

export const employeeSignOut = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(()=>{
            Actions.auth({ type: 'reset' })
        })
    }
}