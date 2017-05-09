import { combineReducers } from 'redux'

import FormReducer from './FormReducer'
import SearchReducer from './SearchReducer'
export default combineReducers({
    form: FormReducer,
    search:SearchReducer
})