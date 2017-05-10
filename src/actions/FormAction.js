import {
    ADD_QUESTION,
    ADD_QUESTION_FAILED,
    ADD_QUESTION_SUCCESS,
    QUESTION_FETCH_SUCCESS,
    QUESTION_ADDING,

    IMAGE_CANCEL,
    IMAGE_ERROR,
    IMAGE_SUCCESS
} from './types';

import {Platform} from 'react-native'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const addQuestion = (data) => {
    const { subjectCode, exam, semester, year } = data.value
    return (dispatch) => {
        dispatch({
            type: QUESTION_ADDING
        })

        uploadImage(data.url).then(url => {
            firebase.database().ref(`/questions/`)
                .push({ subjectCode, exam, semester, year,url })
                .then(() => {
                    console.log("success")
                    dispatch({
                        type: ADD_QUESTION
                    })
                    Actions.home({ type: 'reset' })
                }).catch((e) => {
                    console.log(e)
                    dispatch({
                        type: ADD_QUESTION_FAILED
                    })
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


var options = {
    title: 'Select Question',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export const selectImage = () => {
    return (dispatch) => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');

            }
            else if (response.error) {
                dispatch({
                    type: IMAGE_ERROR
                })
            }
            else {
                let source = response.uri
                let image_data = 'data:image/jpeg;base64,' + response.data
                dispatch({
                    type: IMAGE_SUCCESS,
                    payload: { source, image_data }
                })
            }
        })
    }
}


const uploadImage = (uri, mime = 'application/octet-stream') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
        const sessionId = new Date().getTime()
        let uploadBlob = null
        const imageRef = firebase.storage().ref('images').child(`${sessionId}`)

        fs.readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
    })
}