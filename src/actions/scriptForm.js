export const updateScriptFormData = scriptFormData => {
  return {
    type: "UPDATED_SCRIPT",
    scriptFormData
  }
}

export const resertScriptFormData = () => {
  return {
    type: "RESET_SCRIPT_FORM"
  }
}
