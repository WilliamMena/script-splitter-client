const API_URL = process.env.REACT_APP_API_URL


// action creators
const setScripts = scripts => {
  return {
    type: "GET_SCRIPTS_SUCCESS",
    scripts
  }
}

// Async actions
export const getScripts = () => {
  return dispatch => {
    return fetch(`${API_URL}/scripts`)
      .then(response => response.json())
      .then(scripts => dispatch(setScripts(scripts)))
      .catch(error => console.log(error))
  }
}
