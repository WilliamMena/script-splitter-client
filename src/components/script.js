import React, {Component} from 'react'
import { connect } from 'react-redux'


import CaptionSplit from '../containers/captionSplit.js'
import {deleteScript} from '../actions/scripts.js'



class Script extends Component {
  handleOnClick = event => {
    event.preventDefault()
    const id = event.target.name
    // continue on creating the delete button, check where the other actions go to
    this.props.deleteScript(id)
  }


  render() {
    return (
      <div key={this.props.script.id}>
        <h4>{this.props.script.title}</h4>
        <button name={this.props.script.id} onClick={event => this.handleOnClick(event)} >Delete</button>
        <p>{this.props.script.text}</p>
        <CaptionSplit text={this.props.script.text} />
      </div>
    )
  }
}




export default connect(undefined, {deleteScript})(Script);
