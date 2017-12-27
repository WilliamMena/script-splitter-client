const initialState = {
  title: '',
  text: ''
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
