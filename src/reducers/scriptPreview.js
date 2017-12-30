const initialState = {
  preview: false,
  script: []
}

export default function scriptPreview(state = initialState, action) {
  switch(action.type) {
    case 'RENDER_SCRIPT_PREVIEW':
      return action.scriptPreviewData;

    default:
      return state;
  }
}
