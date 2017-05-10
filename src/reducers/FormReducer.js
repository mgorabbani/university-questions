import {
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAILED,
    QUESTION_ADDING,

    IMAGE_CANCEL,
    IMAGE_ERROR,
    IMAGE_SUCCESS
} from '../actions/types';

INITIAL_STATE = {
    loading: false,
    error: '',
    img_fail: '',
    source: '',
    image_data: '',
    value: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QUESTION_ADDING:
            return {...state,loading:true,value:action.payload}
        case ADD_QUESTION_FAILED:
            return { ...INITIAL_STATE, loading: false, error: "something went wrong please try again" }
        case ADD_QUESTION_SUCCESS:
            return { ...INITIAL_STATE, loading: false }
        case IMAGE_SUCCESS:
            return { ...state, source: action.payload.source, image_data: action.payload.image_data }
        case IMAGE_ERROR:
            return { ...state, img_fail: "Can't upload the image. Check your connection" }
        default:
            return state
    }
}

