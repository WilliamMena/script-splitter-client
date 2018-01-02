import {resetScriptFormData} from './scriptForm.js'

const API_URL = process.env.REACT_APP_API_URL

// action creators - typically used in the async actions below
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

const afterDestroyScript = scriptId => {
  // look through the delete lectures in the curriculumn
  return {
    type: 'DELETE_SCRIPT_SUCCESS',
    scriptId
  }
}

// Async actions
export const getScripts = () => {
  return dispatch => {
    return fetch(`${API_URL}/scripts`)
      .then(response => response.json())
      .then(scripts => {
        dispatch(setScripts(scripts))
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
    .then(script => {
      dispatch(addScript(script))
      dispatch(resetScriptFormData())
    })
    .catch(error => console.log(error))
  }
}

export const deleteScript = scriptId => {

  return dispatch => {
    return fetch(`${API_URL}/scripts/${scriptId}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => dispatch(afterDestroyScript(scriptId)))
    .catch(error => console.log(error))
  }
}
