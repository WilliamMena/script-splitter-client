const initialState = {
  title: '',
  text: '',
  characters: 0,
  timecode: "00:00:00"
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
