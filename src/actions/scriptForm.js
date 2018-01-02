export const updateScriptFormData = scriptFormData => {
  return {
    type: "UPDATED_SCRIPT",
    scriptFormData
  }
}

export const resetScriptFormData = () => {
  return {
    type: "RESET_SCRIPT_FORM"
  }
}
