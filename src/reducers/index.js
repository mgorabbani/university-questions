import { combineReducers } from 'redux'

import FormReducer from './FormReducer'
import SearchReducer from './SearchReducer'
import HomeReducer from './HomeReducer'
export default combineReducers({
    form: FormReducer,
    search: SearchReducer,
    home: HomeReducer
})