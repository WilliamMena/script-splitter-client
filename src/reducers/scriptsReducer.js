export default function scriptReducer(state = [], action) {
  switch(action.type) {
    case 'GET_SCRIPTS_SUCCESS':
      return action.scripts;

      default:
        return state;
  }
}
