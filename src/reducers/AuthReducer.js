import * as T from '../actions/types';

const INITIAL_STATE = {
    email: '',
    pass:'',
    user:null,
    error:'',
    loading:false,
}

export default (state= INITIAL_STATE,action) => {

    switch(action.type) {
        case T.EMAIL_CHANGED:
             return {...state,email:action.payload}
        case T.PASS_CHANGED: 
            return {...state,pass:action.payload}
        case T.LOGIN_USER_SUCCESS:
            return {...state,...INITIAL_STATE,user:action.payload}
        case T.LOGIN_USER_FAIL: 
            return {...state,pass:'',error:action.payload.message,loading:false}
        case T.LOGIN_USER:
            return {...state,loading:true}
        default:
           return state
    }
}