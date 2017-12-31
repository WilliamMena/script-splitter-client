export default function scriptsReducer(state = [], action) {
  switch(action.type) {
    case 'GET_SCRIPTS_SUCCESS':
      return action.scripts;

    case 'CREATE_SCRIPT_SUCCESS':
      return state.concat(action.script)

    case 'DELETE_SCRIPT_SUCCESS':
    // figure out why I get an error after deleting
      const scripts = state.filter(script => script.id !== parseFloat(action.scriptId))
      return scripts

    default:
      return state;
  }
}
