import React, {Component} from 'react';
import { connect } from 'react-redux'

import { updateScriptFormData, resetScriptFormData } from '../actions/scriptForm.js'
import { createScript } from '../actions/scripts.js'
import { renderScriptPreview, resetScriptPreview } from '../actions/scriptPreview.js'
import ScriptShowPreview from './scriptShowPreview.js'

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
    this.props.createScript(this.props.scriptFormData, this.props.history)

  }

  handlePreviewClick = event => {
    event.preventDefault()
    this.props.renderScriptPreview(this.props.scriptFormData)
  }

  handleResetClick = event => {
    event.preventDefault()
    this.props.resetScriptFormData()
    this.props.resetScriptPreview()
  }


  render() {
    const { title, text, characters, timecode } = this.props.scriptFormData
    return (
      <div className="Script-form">
        <h1>Enter new script</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>Title </label>
          <input type='text' name="title" value={title} onChange={event => this.handleOnChange(event)}/>
          <br/>

          <br/>
          <textarea name="text" value={text} onChange={event => this.handleOnChange(event)} rows='8' cols='100' />

          <br/>
          <label>Split by how many characters? (Including spaces) Default is 45. </label>
          <input type="text" name="characters" value={characters} onChange={event => this.handleOnChange(event)} />
          <br/>

          <label>How long is your video? Defaults to 10 Minutes. </label>
          <input type="text" name="timecode" value={timecode} placeholder="hh:mm:ss" onChange={event => this.handleOnChange(event)} />
          <br/>


          <button onClick={event => this.handlePreviewClick(event)}>Preview</button>
          <button onClick={event => this.handleResetClick(event)}>Reset Form</button>
          <button type='submit'>Submit new script</button>
        </form>

        <div className='Script-form-results'>
          <h2>Results</h2>

          {this.props.scriptPreview.preview === false ? <p>Preview is off</p> : <ScriptShowPreview script={this.props.scriptPreview} />}
        </div>



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

export default connect(mapStateToProps, {updateScriptFormData, createScript, renderScriptPreview, resetScriptFormData, resetScriptPreview})(ScriptForm)
