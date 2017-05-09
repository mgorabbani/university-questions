import {
    FETCH_RECENT_UPLOADS,
    FETCHING_RECENT_UPLOADS,
    FETCH_RECENT_UPLOADS_FAILED
} from '../actions/types';


INITIAL_STATE = {
    loading: false,
    error: '',
    data:[]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RECENT_UPLOADS:
            return { ...INITIAL_STATE, data:action.payload }
        case FETCHING_RECENT_UPLOADS:
            return { ...INITIAL_STATE, loading: true }
        case FETCH_RECENT_UPLOADS_FAILED:
            return {...INITIAL_STATE,loading:false,error:"something went wrong please try again"}
        default:
            return state
    }
}

