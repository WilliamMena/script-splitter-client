import {resertScriptFormData} from './scriptForm.js'

const API_URL = process.env.REACT_APP_API_URL

// action creators
const setScripts = scripts => {
  return {
    type: "GET_SCRIPTS_SUCCESS",
    scripts
  }
}

const addScript = script => {
  return {
    type: 'CREATE_SCRIPT_SUCCESS',
    script
  }
}

// Async actions
export const getScripts = () => {
  return dispatch => {
    return fetch(`${API_URL}/scripts`)
      .then(response => response.json())
      .then(scripts => {
        dispatch(setScripts(scripts))
        dispatch(resertScriptFormData())
      })
      .catch(error => console.log(error))
  }
}

export const createScript = script => {

  return dispatch => {
    return fetch(`${API_URL}/scripts`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({script: Object.assign({}, script, {user_id: "1"})})
    })
    .then(response => response.json())
    .then(script => dispatch(addScript(script)))
    .catch(error => console.log(error))
  }
}
