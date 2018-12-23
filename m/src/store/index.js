import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'

import rootReducer from '../reducers';

const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }
// const store = createStore(
//     rootReducer,
//     applyMiddleware(...middleware)
// )
// export default store

const rootReducer = combineReducers({
    
})


export default (initialState) =>
    createStore(rootReducer, initialState, applyMiddleware(...middleware))