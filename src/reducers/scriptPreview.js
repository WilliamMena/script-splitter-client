const initialState = {
  preview: false,
  script: []
}

export default function scriptPreview(state = initialState, action) {
  switch(action.type) {
    case 'RENDER_SCRIPT_PREVIEW':
      return action.scriptPreviewData;
    case 'RESET_SCRIPT_PREVIEW':
      return initialState

    default:
      return state;
  }
}
