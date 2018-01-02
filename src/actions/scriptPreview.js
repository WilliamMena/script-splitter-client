export const renderScriptPreview = scriptPreviewData => {
  return {
    type: "RENDER_SCRIPT_PREVIEW",
    scriptPreviewData
  }
}

export const resetScriptPreview = () => {
  return {
    type: "RESET_SCRIPT_PREVIEW"
  }
}
