const initialState = {
  title: '',
  text: '',
  characters: 0
}

export default function scriptFormData(state = initialState, action) {
  switch(action.type) {
    case 'UPDATED_SCRIPT':
      return action.scriptFormData;
    case 'RESET_SCRIPT_FORM':
      return initialState

    default:
      return state;
  }
}
