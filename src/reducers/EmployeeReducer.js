import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_CREATE_DONE,
    EMPLOYEE_CREATE_FAILED,
    EMPLOYEE_SAVE_SUCCESS

    
} from '../actions/types';

INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    loading:null,
    error:''
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state,[action.payload.prop]:action.payload.value };
        case EMPLOYEE_CREATE:
            return {...INITIAL_STATE,loading:true}
        case EMPLOYEE_CREATE_DONE:
            return INITIAL_STATE
        case EMPLOYEE_CREATE_FAILED:
            return {...state,error:"Can't create Employee at the moment. Please try again!"}
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE
        default:
            return state
    }
}

