import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import scriptsReducer from "./reducers/scriptsReducer.js"

const reducers = combineReducers({
  scripts: scriptsReducer
})
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware));
