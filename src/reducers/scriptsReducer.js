export default function scriptsReducer(state = [], action) {
  switch(action.type) {
    case 'GET_SCRIPTS_SUCCESS':
      return action.scripts;

    case 'CREATE_SCRIPT_SUCCESS':
      return state.concat(action.script)

    default:
      return state;
  }
}
