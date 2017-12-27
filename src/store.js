import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import scriptsReducer from "./reducers/scriptsReducer.js"
import scriptFormData from './reducers/scriptFormData.js'

const reducers = combineReducers({
  scripts: scriptsReducer,
  scriptFormData
})
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware));
