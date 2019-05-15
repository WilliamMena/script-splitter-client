import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import scriptsReducer from "./reducers/scriptsReducer.js"
import scriptFormData from './reducers/scriptFormData.js'
import scriptPreview from './reducers/scriptPreview.js'

const reducers = combineReducers({
  scripts: scriptsReducer,
  scriptFormData,
  scriptPreview
})
const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)));
