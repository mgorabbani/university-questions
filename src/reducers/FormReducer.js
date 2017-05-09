import {
    ADD_QUESTION_SUCCESS, 
    ADD_QUESTION_FAILED,
    QUESTION_ADDING
} from '../actions/types';

INITIAL_STATE = {
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QUESTION_ADDING:
            return { ...INITIAL_STATE, loading: true }
        case ADD_QUESTION_FAILED:
            return {...INITIAL_STATE,loading:false,error:"something went wrong please try again"}
        case ADD_QUESTION_SUCCESS:
            return { ...INITIAL_STATE, loading: false }

        default:
            return state
    }
}

