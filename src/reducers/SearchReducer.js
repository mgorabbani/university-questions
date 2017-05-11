import {
    FETCH_SEARCH_ERROR,
    FETCH_SEARCH_RESULT,
    FETCHING_SEARCH_RESULT
} from '../actions/types';

INITIAL_STATE = {
    loading: false,
    data: [],
    error:'',
    keyword:'fuck'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SEARCH_RESULT:
            return { ...INITIAL_STATE, data: action.payload }
        case FETCHING_SEARCH_RESULT:
            return { ...INITIAL_STATE, loading: true }
        case FETCH_SEARCH_ERROR:
            return {...INITIAL_STATE,loading:false,error:"something went wrong please try again"}
        default:
            return state
    }
}

