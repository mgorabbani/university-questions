import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';

export default  store = createStore(reducers,{},applyMiddleware(ReduxThunk));