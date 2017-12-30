import React, {Component} from 'react';
import { connect } from 'react-redux'

import { updateScriptFormData } from '../actions/scriptForm.js'
import { createScript } from '../actions/scripts.js'
import { renderScriptPreview } from '../actions/scriptPreview.js'
import ScriptShowPreview from '../containers/scriptShowPreview.js'

class ScriptForm extends Component {

// ADJUST THE FORM TO SAVE TO THE STATE

  handleOnChange = event => {
    const {name, value} = event.target
    const currentScriptFormData = Object.assign({}, this.props.scriptFormData, {
      [name]: value
    })
    this.props.updateScriptFormData(currentScriptFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createScript(this.props.scriptFormData)
  }

  handlePreviewClick = event => {
    event.preventDefault()
    this.props.renderScriptPreview(this.props.scriptFormData)
  }


  render() {
    const { title, text, characters } = this.props.scriptFormData
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Title </label>
          <input type='text' name="title" value={title} onChange={event => this.handleOnChange(event)}/>
          <br/>

          <br/>
          <textarea name="text" value={text} onChange={event => this.handleOnChange(event)} rows='8' cols='100' />

          <br/>
          <label>Split by how many characters? (Including spaces) </label>
          <input type="text" name="characters" value={characters} onChange={event => this.handleOnChange(event)} />
          <br/>


          <button onClick={event => this.handlePreviewClick(event)}>Preview</button>
          <button type='submit'>Submit new script</button>
        </form>

        <h1>Results</h1>
        {this.props.scriptPreview.preview === false ? <p>Preview is off</p> : <ScriptShowPreview script={this.props.scriptPreview} />}



      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    scriptFormData: state.scriptFormData,
    scriptPreview: state.scriptPreview
  }
}

export default connect(mapStateToProps, {updateScriptFormData, createScript, renderScriptPreview})(ScriptForm)
